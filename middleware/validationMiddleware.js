import { body, param, validationResult } from "express-validator";
import { BadRequestError, NotFoundError } from "../errors/customErrors.js";
import { JOB_STATUS, JOB_TYPE } from "../utils/constants.js";
import mongoose from "mongoose";
import Job from "../models/JobModel.js";
import User from "../models/UserModel.js";

const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);
        if (errorMessages[0].startsWith("no job")) {
          throw new NotFoundError("Job Not Found");
        }
        throw new BadRequestError(errorMessages);
      }
      next();
    },
  ];
};

export const validateJobInput = withValidationErrors([
  body("company").notEmpty().withMessage("company is required"),
  body("position").notEmpty().withMessage("position is required"),
  body("jobLocation").notEmpty().withMessage("job location is required"),
  body("jobStatus")
    .isIn(Object.values(JOB_STATUS))
    .withMessage(
      `job status must be one of ${Object.values(JOB_STATUS).join(", ")}`
    ),
  body("jobType")
    .isIn(Object.values(JOB_TYPE))
    .withMessage(
      `job type must be one of ${Object.values(JOB_TYPE).join(", ")}`
    ),
]);

export const validateIdParam = withValidationErrors([
  param("id").custom(async (value) => {
    const isValid = mongoose.Types.ObjectId.isValid(value);
    if (!isValid) throw new Error("Invalid MongoDB ID format");
    const job = await Job.findById(value);
    if (!job) throw new NotFoundError(`no job found with id:${value}`);
  }),
]);

export const validateRegisterInput = withValidationErrors([
  body("name").notEmpty().withMessage("name is required"),
  body("lastName").notEmpty().withMessage("last name is required"),
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("email is not valid")
    .custom(async (value) => {
      const user = await User.findOne({ email: value });
      if (user) {
        throw new BadRequestError("Email already in use");
      }
    }),

  body("password")
    .notEmpty()
    .withMessage("password is required")
    .isLength({ min: 6 })
    .withMessage("password must be at least 6 characters long"),
  body("location").notEmpty().withMessage("location is required"),
]);

export const validateLoginInput = withValidationErrors([
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("email is not valid"),
  body("password").notEmpty().withMessage("password is required"),
]);
