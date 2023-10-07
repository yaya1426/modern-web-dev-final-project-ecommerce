import Product from "./product";

interface OrderItem extends Product {
  total: number;
  quantity: number;
}
export default OrderItem;
