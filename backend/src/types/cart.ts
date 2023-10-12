import CartItem from "./cart-item";
import CartStatus from "./cart-status";

interface Cart {
  status: CartStatus;
  cartItems: CartItem[];
  userId: string;
}
export default Cart;
