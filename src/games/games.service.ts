import { Injectable } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { TeamsService } from '../teams/teams.service';


export interface StatsPlayer {
  name: string;
  lastName: string;
  pts: number;
}

@Injectable()
export class GamesService {

  constructor(
    private readonly teamsService: TeamsService
  ) {}

  async generateGame(createGameDto: CreateGameDto) {
    
    const [ home, visitant ] = await Promise.all([

      this.teamsService.findOne( createGameDto.home ),
      this.teamsService.findOne( createGameDto.visitant )

    ]);

    const [ playersHome, playersVisitant ] = await Promise.all([
      this.teamsService.findPlayers(home._id),
      this.teamsService.findPlayers(visitant._id)
    ]);

    let ptsHome: number = 0;
    let ptsVisitant: number = 0;

    let statsHome: StatsPlayer[] = [];
    let statsVisitant: StatsPlayer[] = [];

    for (let i = 0; i < playersHome.length; i++) {
      const { name, lastName, minPts, careerHightPts } = playersHome[i];
      const pts = Math.floor((Math.random() * (careerHightPts - minPts)) + minPts);
      ptsHome += pts

      statsHome.push({
        name,
        lastName,
        pts
      });
    }

    for (let i = 0; i < playersVisitant.length; i++) {
      const { name, lastName, minPts, careerHightPts } = playersVisitant[i];
      console.log(name)
      const pts = Math.floor((Math.random() * (careerHightPts - minPts)) + minPts);
      ptsVisitant += pts;

      statsVisitant.push({
        name,
        lastName,
        pts
      });
    }

    let msg: string = (ptsHome > ptsVisitant ) 
      ? `Gana ${ home.name } ${ ptsHome } - ${ ptsVisitant } ${ visitant.name }`
      : `Gana ${ visitant.name } ${ ptsVisitant } - ${ ptsHome } ${ home.name }`

    return {
      msg,
      statsHome,
      statsVisitant,
    }
  }

}
