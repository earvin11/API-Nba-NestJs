import { Injectable, UnauthorizedException  } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';

import * as bcrypt from 'bcrypt';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { LoginUserDto } from './dto/login-user.dto';
import { JwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class AuthService {

  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,

    private readonly jwtService: JwtService
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const { password, ...userData } = createUserDto;

      const user = await this.userModel.create({
        ...userData,
        password: bcrypt.hashSync( password, 10 )
      });
  
      return user;
    } catch (error) {
      console.log(error);
    }
  }

  async login(loginUserDto: LoginUserDto) {

    const { email, password } = loginUserDto;
      
      const user = await this.userModel.findOne({ email });

      if(!user)
        throw new UnauthorizedException('User not exists');

      if( !bcrypt.compareSync( password, user.password ) )
        throw new UnauthorizedException('Password invalid');

      return {
        user,
        token: this.generateJwt({ email: user.email })
      };

  }

  private generateJwt( payload: JwtPayload ) {

    const token = this.jwtService.sign( payload );
    return token;

  }
}
