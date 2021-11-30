const express = require("express");
const {getTask,getTaskById } = require("./../controllers/task");
const taskRouter = express.Router();

taskRouter.post("/tasks", getTask);
taskRouter.post("/task", getTaskById);



module.exports = taskRouter;