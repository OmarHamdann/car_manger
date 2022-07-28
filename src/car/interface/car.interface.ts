import { Document } from "mongoose";


export interface ICar extends Document {
    readonly id: number;
    readonly name: string;
    readonly price: string;
    readonly color: string;
}
