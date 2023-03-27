import { Module } from '@nestjs/common';

import { GamesService } from './games.service';
import { GamesController } from './games.controller';
import { TeamsModule } from '../teams/teams.module';

@Module({
  controllers: [GamesController],
  providers: [GamesService],
  imports: [ TeamsModule ]
})
export class GamesModule {}
