const express = require("express");
const {getTask,getTaskById,deleteAllTask,updateTask,createTask } = require("./../controllers/task");
const taskRouter = express.Router();

taskRouter.post("/tasks", getTask);
taskRouter.post("/task", getTaskById);
taskRouter.delete("/task", deleteAllTask);
taskRouter.put("/task", updateTask);
taskRouter.post("/create", createTask);



module.exports = taskRouter;