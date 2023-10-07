import Address from "./address";

interface User {
  fullName: string;
  email: string;
  phoneNumber: string;
  addresses: Address[];
  userId: String;
}
export default User;
