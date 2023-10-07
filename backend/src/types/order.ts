import OrderStatus from "./order-status";

interface Order {
    orderNumber: string;
    status: OrderStatus;
    total: number;
  }
  export default Order;