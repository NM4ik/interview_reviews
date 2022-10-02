import express from "express";
const router = express.Router();
import { v4 as uuid } from "uuid";

let users = [
  {
    id: "1",
    name: "John",
    lastName: "Fighter",
    age: "33",
  },
  {
    id: "2",
    name: "Max",
    lastName: "Azyk",
    age: "15",
  },
  {
    id: "3",
    name: "Nick",
    lastName: "Locz",
    age: "99",
  },
];

router.get("/", (req, res) => {
  res.send(users);
});

router.post("/", (req, res) => {
  const user = req.body;
  const uId = uuid();
  const userWithId = { id: uId, ...user };

  users.push(userWithId);
  res.send(`user - ${userWithId.name} was added to mockdata`);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id == id);

  res.send(`${foundUser.name}`);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  // const foundUser = users.find((user) => user.id == id);
  users = users.filter((user) => user.id != id);

  res.send(`${users}`);
});

export default router;
