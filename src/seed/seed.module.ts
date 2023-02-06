import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { TeamsModule } from 'src/teams/teams.module';
import { PlayersModule } from 'src/players/players.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [
    TeamsModule,
    PlayersModule
  ]
})
export class SeedModule {}
