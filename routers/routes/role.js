const express = require("express");
const { addRole, getRoles } = require("./../controllers/role");
const roleRouter = express.Router();
const authontication=require("./../middlewares/authontication");
const {adminAuthorization,userAuthorization}=require("./../middlewares/authorization");

roleRouter.post("/",authontication,adminAuthorization,addRole);
roleRouter.get("/",authontication,adminAuthorization, getRoles);

module.exports = roleRouter;