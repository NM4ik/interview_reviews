import CustomApiError from "../errors/custom-error.js";

const errorHandler = (err, req, res, next) => {
  // if (err instanceof CustomApiError) {
  //   return res.status(err.statusCode).json({ msg: err.msg });
  // }
  console.log(err);
  return res.status(500).jsoon({ msg: "Сервер не отвечает" });
};

export default errorHandler;
