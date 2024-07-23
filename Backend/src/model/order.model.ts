import mongoose, { mongo, Schema } from "mongoose";


const orderSchema = new Schema({
    userId:{
type:mongoose.Schema.Types.ObjectId,
required:true,
ref:"User"
    },
    fullName: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    city: {
        type: String,
        required: true,
        trim: true
    },
    postalCode: {
        type: String,
        required: true,
        trim: true
    },
    country: {
        type: String,
        required: true,
        trim: true
    },
    lat: {
        type: Number,
        required: true
    },
    lng: {
        type: Number,
        required: true
    },
    productName: {
        type: String,
        required: true,
        trim: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 1
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },
    paymentId: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address']
    },
    status: {
        type: String,
        required: true,
        enum: ['pending', 'processing', 'completed', 'cancelled'],
        default: 'pending'
    },
    itemsPrice: {
        type: Number,
        required: true,
        min: 0
    },
    shippingPrice: {
        type: Number,
        required: true,
        min: 0
    },
    taxPrice: {
        type: Number,
        required: true,
        min: 0
    },
    totalPrice: {
        type: Number,
        required: true,
        min: 0
    },
    isPaid: {
        type: Boolean,
        required: true,
        default: false
    },
    paidAt: {
        type: Date
    },
    isDelivered: {
        type: Boolean,
        required: true,
        default: false
    },
    deliveredAt: {
        type: Date
    }
}, { timestamps: true });

const OrderModel = mongoose.model("Order", orderSchema);

export default OrderModel;
