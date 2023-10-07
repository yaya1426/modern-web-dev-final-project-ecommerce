import CartModel from "../models/cart";
import Cart from "../types/cart";

export const getCartForUser = (userId: string) => {
    // TO DO: Get the current active cart for the user, by thier user id.
}

export const addItemToCart = (productId: string, userId: string) => {
    // TO DO: Get active cart user, and add product item to it.
}

export const removeItemFromCart = (productId: string, userId: string) => {
    // TO DO: Remove item from cart by its product id for the current active cart.
}