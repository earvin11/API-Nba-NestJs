import { Module } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { TeamsController } from './teams.controller';
import { MongooseModule } from '@nestjs/mongoose/dist';
import { Team, TeamSchema } from './entities/team.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Team.name,
        schema: TeamSchema
      }
    ])
  ],
  controllers: [ TeamsController ],
  providers: [ TeamsService ],
  exports: [ MongooseModule, TeamsService ]
})
export class TeamsModule {}
