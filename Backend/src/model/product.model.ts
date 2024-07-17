import mongoose, { Schema, Document } from 'mongoose';



const productSchema = new Schema(
    {
        name: { type: String, required: true },
        price: { type: Number, required: true },
        image: { type: String, required: true },
        description: { type: String, required: true },
        category: { type: String, required: true },
        brand: { type: String, required: true },
        rating: { type: Number, required: true, default: 0 },
        numReviews: { type: Number, required: true, default: 0 },
        countInStock: { type: Number, required: true, default: 0 },
        slug: { type: String, required: true, unique: true },
    },
    {
        timestamps: true, 
    }
);

const ProductModel = mongoose.model('Product', productSchema);

export default ProductModel;
