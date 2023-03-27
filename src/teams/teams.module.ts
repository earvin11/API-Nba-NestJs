import { Module } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { TeamsController } from './teams.controller';
import { MongooseModule } from '@nestjs/mongoose/dist';
import { Team, TeamSchema } from './entities/team.entity';
import { PlayersModule } from 'src/players/players.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Team.name,
        schema: TeamSchema
      }
    ]),

    PlayersModule
  ],
  controllers: [ TeamsController ],
  providers: [ TeamsService ],
  exports: [ MongooseModule, TeamsService ]
})
export class TeamsModule {}
