import * as moongose from 'mongoose';

export const CarSchema = new moongose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        
    },
    price: {
        type: String,
       
    },
    color: {
        type: String,
       
    },
}
);
