import OrderModel from "../models/order";
import Order from "../types/order";

export const createOrder = (productId: string, userId: string) => {
  // TO DO: Create order from active cart, and switch to completed cart.
};

export const getOrders = (userId: string) => {
  // TO DO: Get all orders by userId
};

export const updateOrders = (orderId: string, data: Order) => {
  // TO DO: update order by orderId
};
