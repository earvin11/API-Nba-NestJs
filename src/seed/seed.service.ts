import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { TeamsService } from 'src/teams/teams.service';
import { initialData } from './data/seed-data';
import { PlayersService } from '../players/players.service';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Team } from 'src/teams/entities/team.entity';
import { Player } from 'src/players/entities/player.entity';


@Injectable()
export class SeedService {

  constructor(
    private readonly teamsService: TeamsService,
    private readonly playersService: PlayersService,

    @InjectModel(Team.name)
    private readonly teamModel: Model<Team>,
    @InjectModel( Player.name )
    private readonly playerModel: Model<Player>,
  ) {}

  async runSeed() {
    try {

      await this.cleanDB();

      await this.insertTeams();
      const team = await this.teamsService.findAll();

      await this.insertPlayers(team[0]._id);
      return 'Seed executed';

    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Talk to administrator');
    }
  }

  private async insertTeams() {

    const teams = initialData.teams;

    const insertPromises = [];

    teams.forEach( team => {
      insertPromises.push( this.teamsService.create( team ) );
    });

    await Promise.all(insertPromises);
    return true;
  }

  private async insertPlayers( teamId: string ) {
    const players = initialData.players;

    const insertPromises = [];

    players.forEach( player => {
      insertPromises.push( this.playersService.create({ ...player, team: teamId }) );
    });

    await Promise.all( insertPromises );
    return true;
  }

  private async cleanDB() {
    await this.playerModel.deleteMany();
    await this.teamModel.deleteMany();
  }
  
}
