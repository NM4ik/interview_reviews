import express from "express";
import bodyParser from "body-parser";

import usersRoutes from "./src/routes/users.js";

const app = express();
const APP_PORT = 5000;

app.use(bodyParser.json());

app.use("/users", usersRoutes);

app.listen(APP_PORT, () => {
  console.log(`SERVER RUNNING ON PORT : ${APP_PORT}`);
});

app.get("/", (req, res) => res.send("HELLO FROM HOME PAGE"));
