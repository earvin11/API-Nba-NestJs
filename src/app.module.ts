import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PlayersModule } from './players/players.module';
import { TeamsModule } from './teams/teams.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/Nba'),
    PlayersModule, 
    TeamsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
