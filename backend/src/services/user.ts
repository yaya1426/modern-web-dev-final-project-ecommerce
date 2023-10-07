import UserModel from "../models/user";
import User from "../types/user";
import bcrypt from "bcrypt";
import generateJwt from "../utils/generateJwt";

export const loginUser = async ({
  email,
  password,
}: Pick<User, "email" | "password">): Promise<string | undefined> => {
  const findUser = await UserModel.findOne({ email });
  if (!findUser) {
    return undefined;
  }

  const passwordMatch = await bcrypt.compare(password, findUser.password);
  if (passwordMatch) {
    return generateJwt({ email });
  }
  return undefined;
};

export const registerUser = async ({
  fullName,
  email,
  phoneNumber,
  password,
}: Omit<User, "addresses">) => {
  const findUser = await UserModel.findOne({ email });
  if (findUser) {
    return undefined;
  }

  const hashPassword = await bcrypt.hash(password, 10);
  const newUser = new UserModel({
    email,
    password: hashPassword,
    phoneNumber,
    fullName,
  });
  await newUser.save();
  return generateJwt({ email })
};
