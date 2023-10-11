import { users } from "@clerk/clerk-sdk-node";
import UserModel from "../models/user";

export const createUser = async (userId: string) => {
  const user = await users.getUser(userId);
  const newUser = new UserModel({
    fullName: `${user.firstName} ${user.lastName}`,
    email: user.emailAddresses[0],
    phoneNumber: user.phoneNumbers[0],
    userId,
  });
  await newUser.save();
  return newUser;
};

export const getUserProfile = async (userId: string) => {
  const user = await UserModel.findOne({ userId });
  return user;
};
