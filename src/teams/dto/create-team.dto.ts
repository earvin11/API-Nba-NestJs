import { IsString, IsNumber, MinLength, IsInt } from 'class-validator';


export class CreateTeamDto {

    @IsString()
    @MinLength(1)
    name: string;

    @IsString()
    @MinLength(1)
    conference: string;

    @IsNumber()
    @IsInt()
    championships: number;

}
