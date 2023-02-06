import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { Team } from './entities/team.entity';

@Injectable()
export class TeamsService {

  constructor(
    @InjectModel( Team.name )
    private readonly teamModel: Model<Team>
  ) {}

  async create(createTeamDto: CreateTeamDto) {
    try {
      const team = await this.teamModel.create( createTeamDto );
      return team;
    } catch (error) {
      
    }
  }

  async findAll() {
    try {
      const teams = await this.teamModel.find({ status: true });
      return teams;
    } catch (error) {
      
    }
  }

  async findOne(term: string) {

    let team: Team;

    if( isValidObjectId(term) ) {
      team = await this.teamModel.findById(term);
    }

    if(!team) {
      team = await this.teamModel.findOne({ name: term.toUpperCase().trim() });
    }

    if(!team)
      throw new NotFoundException('Team not found');

    return team;

  }

  async update(term: string, updateTeamDto: UpdateTeamDto) {
    
    const team = await this.findOne(term);

    if(updateTeamDto.name)
      updateTeamDto.name = updateTeamDto.name.toUpperCase().trim()

    try {
      await team.updateOne( updateTeamDto );
      return { ...team.toJSON(), updateTeamDto };
    } catch (error) {
      
    }

  }

  async remove(id: string) {
    try {
      await this.teamModel.findByIdAndUpdate(id, {status: false});
      return;
    } catch (error) {
      
    }
  }
}
