const express = require("express");
const {getTask } = require("./../controllers/task");
const taskRouter = express.Router();

taskRouter.post("/task", getTask);



module.exports = taskRouter;