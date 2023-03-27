import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';


@Schema()
export class Player extends Document {

    @Prop()
    name: string;

    @Prop()
    lastName: string;

    @Prop()
    age: number;

    @Prop()
    height: number;

    @Prop()
    weight: number;

    @Prop()
    position: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Team' })
    team: string;

    @Prop()
    minPts: number;

    @Prop()
    careerHightPts: number;

}

export const PlayerSchema = SchemaFactory.createForClass( Player );
