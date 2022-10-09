class CustomApiError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

const customError = (msg, statusCode) => new CustomApiError(msg, statusCode);

export default customError;
