const express = require("express");
const { addRole, getRoles,getRole } = require("./../controllers/role");
const roleRouter = express.Router();
const authontication=require("./../middlewares/authontication");
const {adminAuthorization,userAuthorization}=require("./../middlewares/authorization");

roleRouter.post("/role",authontication,adminAuthorization,addRole);
roleRouter.get("/roles",authontication, getRoles);
roleRouter.get("/role",authontication, getRole);

module.exports = roleRouter;