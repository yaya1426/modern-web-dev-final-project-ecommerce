import Address from "./address";
import UserRole from "./user-role";

interface User {
  fullName: string;
  email: string;
  phoneNumber: string;
  addresses: Address[];
  role: UserRole;
  userId: String;
}
export default User;
