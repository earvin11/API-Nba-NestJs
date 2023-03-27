import { IsString, IsNumber, MinLength, IsInt, IsOptional, IsPositive } from 'class-validator';


export class CreatePlayerDto {

    @IsString()
    @MinLength(1)
    name: string;

    @IsString()
    @MinLength(1)
    lastName: string;

    @IsNumber()
    @IsInt()
    @IsPositive()
    age: number;

    @IsNumber()
    @IsPositive()
    height: number;

    @IsNumber()
    @IsPositive()
    weight: number;

    @IsString()
    @IsOptional()
    position: string;

    @IsString()
    @IsOptional()
    team: string;

    @IsNumber()
    @IsOptional()
    minPts: number;

    @IsNumber()
    @IsOptional()
    careerHightPts: number;

}
