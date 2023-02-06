import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { Player } from './entities/player.entity';

@Injectable()
export class PlayersService {

  private defaultLimit: number;

  constructor(
    @InjectModel( Player.name )
    private readonly playerModel: Model<Player>,

    private readonly configService: ConfigService,

  ) {
    this.defaultLimit = configService.get<number>('defaultLimit');
  }

  async create(createPlayerDto: CreatePlayerDto) {

    createPlayerDto.name = createPlayerDto.name.toUpperCase();

    try {
      const player = await this.playerModel.create( createPlayerDto );
      return player;

    } catch (error) {
      console.log(error)
      throw new InternalServerErrorException('Talk to administrator');
    }
  }

  async findAll() {
    try {
      const players = await this.playerModel.find()
        .limit(this.defaultLimit)
        .populate('team', 'name')
        .select('-__v');
      return players;
    } catch (error) {
      
    }
  }

  async findOne(term: string) {

    let player: Player;

    if( isValidObjectId( term ) ) {
      player = await this.playerModel.findById( term );
    }

    if(!player) {
      player = await this.playerModel.findOne({ name: term.toUpperCase() });
    }

    if(!player)
      throw new NotFoundException(`Player with id or name ${ term }, not found`);

    return player;

  }

  async update(term: string, updatePlayerDto: UpdatePlayerDto) {

    const player = await this.findOne( term );

    if( updatePlayerDto.name )
      updatePlayerDto.name = updatePlayerDto.name.toUpperCase()

    try {
      await player.updateOne( updatePlayerDto );
      return { ...player.toJSON(), updatePlayerDto };

    } catch (error) {
      
    }
  }

  async remove(id: string) {
    const { deletedCount } = await this.playerModel.deleteOne({ _id: id });

    if(deletedCount === 0) {
      throw new BadRequestException(`Pokemon with id "${ id }" not found`);
    }
    return;
  }
}
