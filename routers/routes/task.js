const express = require("express");
const {getTask,getTaskById,deleteAllTask } = require("./../controllers/task");
const taskRouter = express.Router();

taskRouter.post("/tasks", getTask);
taskRouter.post("/task", getTaskById);
taskRouter.delete("/task", deleteAllTask);



module.exports = taskRouter;