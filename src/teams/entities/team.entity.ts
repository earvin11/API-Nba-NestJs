import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import /* mongoose, */ { Document } from 'mongoose';

@Schema()
export class Team extends Document {

    @Prop()
    name: string;

    @Prop()
    conference: string;

    @Prop()
    championships: string;

    @Prop({ default: true })
    status: boolean;

    // @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'TeamsPlayers' })
    // players: string[];

}

export const TeamSchema = SchemaFactory.createForClass( Team );
