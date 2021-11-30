const express = require("express");
const { register,login,getUsers} = require("./../controllers/user");
const userRouter = express.Router();
const authontication=require("./../middlewares/authontication");
const authorization=require("./../middlewares/authorization");

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.post("/users",authontication,authorization,getUsers);

module.exports = userRouter;