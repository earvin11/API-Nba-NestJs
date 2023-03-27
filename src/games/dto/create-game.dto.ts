import { IsString } from 'class-validator';

export class CreateGameDto {

    @IsString()
    home: string;

    @IsString()
    visitant: string;
}
