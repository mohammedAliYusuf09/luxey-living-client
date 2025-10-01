import { Schema } from 'mongoose';
import { model } from 'mongoose';
import { models } from 'mongoose';


export interface IClient {
    name: string;
    email: string;
}

const clientSchema = new Schema<IClient>({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
},{timestamps: true})

const Client = models?.Client || model<IClient>('Client', clientSchema);


export default Client;