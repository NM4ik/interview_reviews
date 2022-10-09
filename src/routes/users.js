import express from "express";
import { getAllUsers, getUser, searchUser } from "../controllers/users.js";
const router = express.Router();

router.get("/", getAllUsers);
router.get("/search", searchUser);

export default router;

// import { v4 as uuid } from "uuid";
// import request from "request";
// import axios from "axios";

// let users = [
//   {
//     id: "1",
//     name: "John",
//     lastName: "Fighter",
//     age: "33",
//   },
//   {
//     id: "2",
//     name: "Max",
//     lastName: "Azyk",
//     age: "15",
//   },
//   {
//     id: "3",
//     name: "Nick",
//     lastName: "Locz",
//     age: "99",
//   },
// ];

// router.get("/", (req, res) => {
//   res.send(users);
// });

// router.post("/", (req, res) => {
//   const user = req.body;
//   const uId = uuid();
//   const userWithId = { id: uId, ...user };

//   users.push(userWithId);
//   res.send(`user - ${userWithId.name} was added to mockdata`);
// });

// router.get("/:id", async (req, res) => {
//   const { id } = req.params;

//   const foundUser = users.find((user) => user.id == id);

//   axios
//     .get("https://api.hh.ru/vacancies/4748227")
//     .then((response) => {
//       return res.send(response.data);
//     })
//     .catch((error) => {
//       return res.status(500).json({ message: err });
//     });

//   //https://blog.risingstack.com/node-hero-async-programming-in-node-js/

//   // return res.send(`${foundUser.name}`);
// });

// router.delete("/:id", (req, res) => {
//   const { id } = req.params;
//   // const foundUser = users.find((user) => user.id == id);
//   users = users.filter((user) => user.id != id);

//   res.send(`${users}`);
// });

// export default router;
