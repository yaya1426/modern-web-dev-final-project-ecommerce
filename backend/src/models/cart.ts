import { Schema, model } from "mongoose";
import Cart from "../types/cart";

const cartSchema = new Schema<Cart>(
  {
    status: { type: String, required: true },
    cartItems: { type: [], required: true },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { versionKey: false }
);
const CartModel = model("Cart", cartSchema);

export default CartModel;
