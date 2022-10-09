import User from "../models/user.js";

export async function getAllUsers(req, res) {
  const users = await User.find();
  return res.status(200).json({ users, nbHits: users.length });
}

export async function searchUser(req, res) {
  const { username } = req.query;
  const queryObject = {};
  if (username) {
    queryObject.username = username;
  }

  const page = Number(req.query.page || 1);
  const limit = 3;
  const skip = (page - 1) * limit;
  const users = await User.find(queryObject).skip(skip).limit(limit);
  return res.status(200).json({ users, nbHits: users.length });
}

export async function getUser(req, res) {
  res.status(200).json({ msg: "testing user 1" });
}
