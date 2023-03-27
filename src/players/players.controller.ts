import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlayersService } from './players.service';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { ParseMongoIdPipePipe } from '../common/pipes/parse-mongo-id.pipe.pipe';

@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Post()
  create(@Body() createPlayerDto: CreatePlayerDto) {
    return this.playersService.create(createPlayerDto);
  }

  @Get()
  findAll() {
    return this.playersService.findAll();
  }

  @Get(':term')
  findOne(
    @Param('term')
    term: string
  ) {
    return this.playersService.findOne(term);
  }

  @Patch(':term')
  update(
    @Param('term')
    term: string,

    @Body()
    updatePlayerDto: UpdatePlayerDto
  ) {
    return this.playersService.update(term, updatePlayerDto);
  }

  @Delete(':id')
  remove(
    @Param('id', ParseMongoIdPipePipe)
    id: string
  ) {
    return this.playersService.remove(id);
  }
}
