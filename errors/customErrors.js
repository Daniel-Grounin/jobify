import { StatusCodes } from "http-status-codes";

export class NotFoundError extends Error {
  constructor(message = "Resource not found") {
    super(message);
    this.name = "NotFoundError";
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}

export class BadRequestError extends Error {
  constructor(message = "Bad request") {
    super(message);
    this.name = "BadRequestError";
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

export class UnauthenticatedError extends Error {
  constructor(message = "Authentication invalid") {
    super(message);
    this.name = "UnauthenticatedError";
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

export class UnauthorizedError extends Error {
  constructor(message = "Not authorized to access this resource") {
    super(message);
    this.name = "UnauthorizedError";
    this.statusCode = StatusCodes.FORBIDDEN;
  }
}

export class ConflictError extends Error {
  constructor(message = "Conflict occurred") {
    super(message);
    this.name = "ConflictError";
    this.statusCode = StatusCodes.CONFLICT;
  }
}

export class InternalServerError extends Error {
  constructor(message = "Internal server error") {
    super(message);
    this.name = "InternalServerError";
    this.statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
  }
}
