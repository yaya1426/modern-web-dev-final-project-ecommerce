import { Schema, model } from "mongoose";
import Order from "../types/order";
import OrderStatus from "../types/order-status";
import OrderItemModel from "./order-item";

const orderSchema = new Schema<Order>(
  {
    orderNumber: { type: String, required: true, unique: true },
    items: { type: [OrderItemModel] },
    status: { type: String, required: true, default: OrderStatus.PENDING },
    total: { type: Number, required: true },
    cart: { type: Schema.Types.ObjectId, ref: "Cart", required: true },
    userId: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);
const OrderModel = model("Order", orderSchema);

export default OrderModel;
