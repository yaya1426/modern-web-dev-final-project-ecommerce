import Product from "./product";

interface OrderItem {
    total: number;
    quantity: number;
    product:Product;
  }
  export default OrderItem;