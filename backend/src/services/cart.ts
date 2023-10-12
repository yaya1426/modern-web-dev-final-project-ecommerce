import CartModel from "../models/cart";
import CartItemModel from "../models/cart-item";
import Cart from "../types/cart";
import CartStatus from "../types/cart-status";

interface ParamAddCartItem {
  productId: string;
  quantity: number;
  userId: string;
}

export const getCartForUser = async (userId: string) => {
  // TO DO: Get the current active cart for the user, by thier user id.
  return await CartModel.findOne({ userId, status: CartStatus.ACTIVE });
};

export const addItemToCart = async ({ productId, quantity, userId}: ParamAddCartItem) => {
  // TO DO: Get active cart user, and add product item to it.
  const cart = await getCartForUser(userId);
  const newCartItem = new CartItemModel({ product: productId, quantity: quantity })
  cart?.cartItems.push(newCartItem);
  await cart?.save();
  // Use Cases
  // 1) Product doesn't exist in database
  // 2) Product stock is 0.
  // 3) Validate data from frontend.
  // 4) Active and valid cart, if not exists then create one.
};

export const updateItemInCart = (productId: string, quantity: number) => {
  // TO DO: Update cart item in current active cart with new quantity
};

export const removeItemFromCart = (productId: string, userId: string) => {
  // TO DO: Remove item from cart by its product id for the current active cart.
};
