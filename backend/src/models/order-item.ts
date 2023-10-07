import { Schema, model } from "mongoose";
import OrderItem from "../types/order-item";

const orderItemSchema = new Schema<OrderItem>(
  {
    quantity: { type: Number, required: true },
    total: { type: Number, required: true },
    product: { type: {} },
  },
  { versionKey: false }
);
const OrderItemModel = model("OrderItem", orderItemSchema);

export default OrderItemModel;
