import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { EnvConfiguration } from './config/env.config';
import { JoiValidationSchema } from './config/joi.validation';
import { PlayersModule } from './players/players.module';
import { TeamsModule } from './teams/teams.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      load: [ EnvConfiguration ],
      validationSchema: JoiValidationSchema,
    }),

    MongooseModule.forRoot(process.env.MONGODB),

    PlayersModule, 
    TeamsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
