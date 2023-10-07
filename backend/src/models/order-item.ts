import { Schema, model } from "mongoose";
import OrderItem from "../types/order-item";

const orderItemSchema = new Schema<OrderItem>(
  {
    title: { type: String, required: true },
    description: { type: String, required: false },
    slug: { type: String, required: true },
    quantity: { type: Number, required: true, default: 0 },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);
const OrderItemModel = model("OrderItem", orderItemSchema);

export default OrderItemModel;
