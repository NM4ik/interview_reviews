// import express from "express";
// import bodyParser from "body-parser";

// import usersRoutes from "./src/routes/users.js";
// import postsRoutes from "./src/routes/posts.js";
// import mongoose from "mongoose";

// const app = express();
// const APP_PORT = 5000;

// app.use(bodyParser.json());
// app.use("/posts", postsRoutes);
// app.use("/users", usersRoutes);

// app.listen(APP_PORT, () => {
//   console.log(`SERVER RUNNING ON PORT : ${APP_PORT}`);
// });

// app.get("/", (req, res) => res.send("HELLO FROM HOME PAGE"));

// mongoose.connect("mongodb://localhost:27017/test", () =>
//   console.log("connected to db")
// );
import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import bodyParser from "body-parser";
import errorHandler from "./src/middleware/error-handler.js";
import notFoundException from "./src/middleware/not-found.js";
import connectDB from "./src/db/connect.js";
import userRouter from "./src/routes/users.js";

// console.log(process.env.DB_CONNECTION);
const app = express();

app.get("/", (req, res) => res.send("HELLO FROM HOME PAGE"));

/// middleware
// app.use(express.json());
app.use(bodyParser.json());
app.use(errorHandler);
// app.use(notFoundException);

/// routes
// app.get("/", (req, res) => res.send("Reviews API"));
app.use("/api/v1/users", userRouter);

const port = process.env.PORT || 3000;

// api/v1/users

const start = async () => {
  try {
    connectDB(process.env.MONGO_URI).then((value) =>
      console.log("succes connect to db")
    );
    app.listen(port, console.log(`Server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
