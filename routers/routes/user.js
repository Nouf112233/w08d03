const express = require("express");
const { register,login, getUsers, deleteUser } = require("./../controllers/user");
const userRouter = express.Router();
const authontication=require("./../middlewares/authontication");
const authorization=require("./../middlewares/authorization");

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.get("/users",authontication,authorization,getUsers);
userRouter.delete("/users",authontication,authorization,deleteUser);

module.exports = userRouter;