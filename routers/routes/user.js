const express = require("express");
const { register,login, getUsers, deleteUser } = require("./../controllers/user");
const userRouter = express.Router();
const authontication=require("./../middlewares/authontication");
const {adminAuthorization,userAuthorization}=require("./../middlewares/authorization");

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.get("/users",authontication,adminAuthorization,getUsers);
userRouter.delete("/users",authontication,adminAuthorization,deleteUser);

module.exports = userRouter;