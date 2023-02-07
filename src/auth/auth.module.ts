import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { User, UserSchema } from './entities/user.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    ConfigModule,

    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema
      }
    ]),

    PassportModule.register({ defaultStrategy: 'jwt' }),

    //Async
    JwtModule.registerAsync({
      imports: [],
      inject: [],
      useFactory: () => {

        return {
          secret: process.env.JWT_SECRET,
          signOptions: {
            expiresIn: '2h'
          }
        }
      }
    }),

  ],
  controllers: [AuthController],
  providers: [ AuthService, JwtStrategy ],
  exports: [ MongooseModule, JwtStrategy, PassportModule, JwtModule ]
})
export class AuthModule {}
