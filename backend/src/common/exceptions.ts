class GenericException extends Error {
  constructor(message: string, statusCode = 500) {
    super(message);
    Error.captureStackTrace(this);
  }
}

export class NotFoundException extends GenericException {
  constructor(message = "Not found") {
    super(message, 404);
  }
}

export class UnexpectedError extends GenericException {
  constructor(message = "Not found") {
    super(message, 400);
  }
}
