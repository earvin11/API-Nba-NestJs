import { IsEmail, IsString, MinLength } from 'class-validator';


export class CreateUserDto {

    @IsString()
    @MinLength(1)
    fullName: string;

    @IsEmail()
    email: string;

    @IsString()
    @MinLength(6)
    password: string;

}
