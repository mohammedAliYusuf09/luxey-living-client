import { Schema } from 'mongoose';
import { model } from 'mongoose';
import { models } from 'mongoose';


export interface IBlog {
    title: string;
    htmlBody: string;
}

const blogSchema = new Schema<IBlog>({
    title: {
        type: String,
        required: true,
    },
    htmlBody: {
        type: String,
        required: true,
    },
},{timestamps: true})

const Blog = models?.Blog || model<IBlog>('Blog', blogSchema);


export default Blog;