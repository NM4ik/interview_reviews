import mongoose, { mongo } from "mongoose";

const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export default connectDB;
