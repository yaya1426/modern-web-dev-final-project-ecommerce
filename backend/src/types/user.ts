import Address from "./address";

interface User {
    fullName: string;
    email: string;
    password: string;
    phoneNumber: string;
    addresses: Address[];
  }
  export  default User;