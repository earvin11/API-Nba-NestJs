import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { EnvConfiguration } from './config/env.config';
import { JoiValidationSchema } from './config/joi.validation';
import { PlayersModule } from './players/players.module';
import { TeamsModule } from './teams/teams.module';
import { SeedModule } from './seed/seed.module';
import { AuthModule } from './auth/auth.module';


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
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
