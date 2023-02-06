import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


@Schema()
export class User extends Document {

    @Prop()
    fullName: string;

    @Prop({ unique: true })
    email: string;

    @Prop()
    password: string;

    @Prop({ default: true })
    status: boolean;

    @Prop({
        type: [String],
        default: ['USER']
    })
    roles: string[];

}

export const UserSchema = SchemaFactory.createForClass( User );
