import { Schema, model } from "mongoose";
import User from "../types/user";
import UserRole from "../types/user-role";

const userSchema = new Schema<User>(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    addresses: { type: [{}], required: true },
    phoneNumber: { type: String, required: true },
    role: { type: String, required: true, default: UserRole.CUSTOMER },
    userId: { type: String, required: true, unique: true }, // Clerk UserID
  },
  { versionKey: false, timestamps: true }
);
const UserModel = model("User", userSchema);

export default UserModel;
