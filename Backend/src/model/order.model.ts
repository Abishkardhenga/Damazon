import mongoose from 'mongoose';

const { Schema } = mongoose;

const shippingAddressSchema = new Schema({
  fullName: { type: String },
  address: { type: String },
  city: { type: String },
  postalCode: { type: String },
  country: { type: String },
  lat: { type: Number },
  lng: { type: Number }
});

const itemSchema = new Schema({
  name: { type: String, required: true },
  quantity: { type: String, required: true },
  image: { type: Number, required: true },
  price: { type: Number, required: true },
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' }
});

const paymentResultSchema = new Schema({
  paymentId: { type: String },
  status: { type: String },
  update_time: { type: String },
  email_address: { type: String }
});

const orderSchema = new Schema({
  orderItems: [itemSchema],
  shippingAddress: shippingAddressSchema,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  paymentMethod: { type: String, required: true },
  paymentResult: paymentResultSchema,
  itemsPrice: { type: Number, required: true, default: 0 },
  shippingPrice: { type: Number, required: true, default: 0 },
  taxPrice: { type: Number, required: true, default: 0 },
  totalPrice: { type: Number, required: true, default: 0 },
  isPaid: { type: Boolean, required: true, default: false },
  paidAt: { type: Date },
  isDelivered: { type: Boolean, required: true, default: false },
  deliveredAt: { type: Date }
}, { timestamps: true });

const OrderModel = mongoose.model('Order', orderSchema);

export default OrderModel;
