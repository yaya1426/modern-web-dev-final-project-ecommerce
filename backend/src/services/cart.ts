import CartModel from "../models/cart";
import CartItemModel from "../models/cart-item";
import Cart from "../types/cart";
import CartStatus from "../types/cart-status";
import { fetchProductById } from "./product";

interface ParamAddCartItem {
  productId: string;
  quantity: number;
  userId: string;
}

export const createCartForUser = async (userId: string) => {
  const newCart = new CartModel({ userId });
  await newCart.save();
  return newCart;
};

export const getCartForUser = async (userId: string) => {
  // TO DO: Get the current active cart for the user, by thier user id.
  return await CartModel.findOne({ userId, status: CartStatus.ACTIVE });
};

export const addItemToCart = async ({
  productId,
  quantity,
  userId,
}: ParamAddCartItem) => {
  // TO DO: Get active cart user, and add product item to it.
  const product = await fetchProductById(productId);
  if (product && product.stock > 0 && productId && quantity && userId) {
    let cart = await getCartForUser(userId);
    if (!cart) {
      cart = await createCartForUser(userId);
    }
    const newCartItem = new CartItemModel({
      product: productId,
      quantity: quantity,
    });
    cart?.cartItems.push(newCartItem);
    await cart?.save();
    return cart;
  }
};

export const updateItemInCart = (productId: string, quantity: number) => {
  // TO DO: Update cart item in current active cart with new quantity
};

export const removeItemFromCart = (productId: string, userId: string) => {
  // TO DO: Remove item from cart by its product id for the current active cart.
};
