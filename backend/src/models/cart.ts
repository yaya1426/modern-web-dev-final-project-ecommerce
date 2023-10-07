import { Schema, model } from "mongoose";
import Cart from "../types/cart";
import CartStatus from "../types/cart-status";
import CartItemModel from "./cart-item";

const cartSchema = new Schema<Cart>(
  {
    status: { type: String, required: true, default: CartStatus.ACTIVE },
    cartItems: {
      type: [CartItemModel],
    },
    userId: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);
const CartModel = model("Cart", cartSchema);

export default CartModel;
