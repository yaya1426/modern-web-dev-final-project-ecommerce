import { Schema, model } from "mongoose";
import CartItem from "../types/cart-item";

const cartItemSchema = new Schema<CartItem>(
  {
    quantity: { type: Number, required: true, default: 0 },
    product: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
  },
  { versionKey: false }
);
const CartItemModel = model("CartItem", cartItemSchema);

export default CartItemModel;
