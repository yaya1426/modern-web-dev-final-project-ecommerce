import { Schema, model } from "mongoose";
import CartItem from "../types/cart-item";

const cartItemSchema = new Schema<CartItem>(
  {
    quantity: { type: Number, required: true, default: 0 },
    product: {
      type: String,
      ref: "Product",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);
const CartItemModel = model("CartItem", cartItemSchema);

export default CartItemModel;
