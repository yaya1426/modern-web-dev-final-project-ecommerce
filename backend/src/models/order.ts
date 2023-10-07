import { Schema, model } from "mongoose";
import Order from "../types/order";
import OrderStatus from "../types/order-status";

const orderSchema = new Schema<Order>(
  {
    orderNumber: { type: String, required: true, unique: true },
    status: { type: String, required: true, default: OrderStatus.PENDING },
    total: { type: Number, required: true },
  },
  { versionKey: false }
);
const OrderModel = model("Order", orderSchema);

export default OrderModel;
