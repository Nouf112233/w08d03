const express = require("express");
const { addRole, getRoles } = require("./../controllers/role");
const roleRouter = express.Router();
const authontication=require("./../middlewares/authontication");
const authorization=require("./../middlewares/authorization");

roleRouter.post("/",authontication,authorization,addRole);
roleRouter.get("/",authontication,authorization, getRoles);

module.exports = roleRouter;