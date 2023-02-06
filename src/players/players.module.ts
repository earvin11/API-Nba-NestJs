import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { PlayersService } from './players.service';
import { PlayersController } from './players.controller';
import { Player, PlayerSchema } from './entities/player.entity';

@Module({
  imports: [
    ConfigModule,
    
    MongooseModule.forFeature([
      {
        name: Player.name,
        schema: PlayerSchema
      },
    ])
  ],
  controllers: [PlayersController],
  providers: [PlayersService],
  exports: [MongooseModule]
})
export class PlayersModule {}
