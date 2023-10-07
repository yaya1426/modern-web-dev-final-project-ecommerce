import UserModel from "../models/user";
import User from "../types/user";

export const createUser = async (data: User) => {
  const newUser = new UserModel(data);
  await newUser.save();
  return newUser;
};

export const getUserProfile = async (userId: string) => {
  const user = await UserModel.findOne({ userId });
  return user;
};
