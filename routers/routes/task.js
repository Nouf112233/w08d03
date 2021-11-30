const express = require("express");
const {getTask,getTaskById,deleteAllTask,updateTask,createTask,deleteTaskById } = require("./../controllers/task");
const taskRouter = express.Router();

taskRouter.post("/tasks", getTask);
taskRouter.post("/task", getTaskById);
taskRouter.delete("/tasks", deleteAllTask);
taskRouter.put("/task", updateTask);
taskRouter.post("/create", createTask);
taskRouter.delete("/task", deleteTaskById);



module.exports = taskRouter;