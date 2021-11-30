const express = require("express");
const {addtask } = require("./../controllers/task");
const taskRouter = express.Router();

taskRouter.post("/", addRole);
// taskRouter.get("/", getRoles);

module.exports = taskRouter;