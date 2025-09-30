import { Schema } from 'mongoose';
import { model } from 'mongoose';
import { models } from 'mongoose';


export interface IProperty {
    title: string;
    summary: string;
    description: string;
    propertyType: string;
    price: number;
    location: string;
    size: string;
    lotSize: string;
    bedrooms: number;
    bathrooms: number;
    parkingSpaces: string;
    yearBuilt: number;
    status: string;
    lat: string;
    lng: string;
    images: string[];
}

const propertySchema = new Schema<IProperty>({
    title : {
        type: String,
        required: true,
    },
    summary : {
        type: String,
        required: true,
    },
    description : {
        type: String,
        required: true,
    },
    propertyType : {
        type: String,
        required: true,
        enum: ['House', 'Apartment', 'Condo', 'Townhouse', 'Villa']
    },
    price : {
        type: Number,
        required: true,
    },
    location : {
        type: String,
        required: true,
    },
    size : {
        type: String,
        required: true,
    },
    lotSize : {
        type: String
    },
    bedrooms : {
        type: Number,
        required: true,
    },
    bathrooms : {
        type: Number,
        required: true,
    },
    parkingSpaces : {
        type: String,
        required: true,
    },
    yearBuilt : {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        required: true,
        enum: ['Available', 'Sold', 'Pending']
    },
    lat: {
        type: String,
        required: true
    },
    lng: {
        type: String,
        required: true
    },
    images : {
        type: [String],
        required: true
    }
}, {timestamps: true});

const Property = models?.Property || model<IProperty>('Property', propertySchema);


export default Property;