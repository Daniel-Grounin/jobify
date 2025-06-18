import User from "../models/UserModel.js";
import { StatusCodes } from "http-status-codes";
import { hashPassword, comparePasswords } from "../utils/passwordUtils.js";
import { UnauthenticatedError } from "../errors/customErrors.js";
import { createJWT } from "../utils/tokenUtils.js";

export const register = async (req, res) => {
  const isFirstAccount = (await User.countDocuments()) === 0;
  req.body.role = isFirstAccount ? "admin" : "user";

  const hashedPassword = await hashPassword(req.body.password);
  req.body.password = hashedPassword;

  const user = await User.create(req.body);
  res.status(StatusCodes.CREATED).json({ msg: "user created" });
};

export const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  const isValidUser =
    user && (await comparePasswords(req.body.password, user.password));

  if (!isValidUser) throw new UnauthenticatedError("invalid credentials");

  const token = createJWT({ userId: user._id, name: user.name });
  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 1 day
    secure: process.env.NODE_ENV === "production", // Set secure flag in production
  });
  res.status(StatusCodes.OK).json({ msg: "user logged in" });
};
