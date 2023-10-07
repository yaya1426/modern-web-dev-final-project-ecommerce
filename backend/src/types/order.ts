import OrderStatus from "./order-status";

interface Order {
  orderNumber: string;
  items: any;
  status: OrderStatus;
  total: number;
  cart: any;
  userId: string;
}
export default Order;
