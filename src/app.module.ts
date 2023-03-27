import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { EnvConfiguration } from './config/env.config';
import { JoiValidationSchema } from './config/joi.validation';
import { PlayersModule } from './players/players.module';
import { TeamsModule } from './teams/teams.module';
import { SeedModule } from './seed/seed.module';
import { AuthModule } from './auth/auth.module';
import { CommonModule } from './common/common.module';
import { GamesModule } from './games/games.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      load: [ EnvConfiguration ],
      validationSchema: JoiValidationSchema,
    }),

    MongooseModule.forRoot(process.env.MONGODB),

    PlayersModule,
    TeamsModule,
    SeedModule,
    AuthModule,
    CommonModule,
    GamesModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
