import express from "express";
const router = express.Router();
import { v4 as uuid } from "uuid";

const users = [
  {
    name: "John",
    lastName: "Fighter",
    age: "33",
  },
  { name: "Max", lastName: "Azyk", age: "15" },
  { name: "Nick", lastName: "Locz", age: "99" },
];

router.get("/", (req, res) => {
  console.log(users);
  res.send(users);
});

router.post("/", (req, res) => {
  const user = req.body;

  const uId = uuid();

  const userWithId = { id: uId, ...user };

  users.push(userWithId);

  res.send(`user - ${user} - WAS ADDED`);
});

export default router;
