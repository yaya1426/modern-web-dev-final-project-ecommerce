import CartStatus from "./cart-status";

interface Cart {
  status: CartStatus;
  cartItems: [];
  userId: string;
}
export default Cart;
