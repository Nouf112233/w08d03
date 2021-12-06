const express = require("express");
const {getTask,getTaskById,deleteAllTask,updateTask,createTask,deleteTaskById ,getAllTaskByAdmin,deleteTaskByAdmin} = require("./../controllers/task");
const taskRouter = express.Router();
const authontication=require("./../middlewares/authontication");
const {adminAuthorization}=require("./../middlewares/authorization");

taskRouter.get("/tasks",authontication, getTask);
taskRouter.post("/task",authontication, getTaskById);
taskRouter.delete("/tasks",authontication, deleteAllTask);
taskRouter.put("/task",authontication, updateTask);
taskRouter.post("/create",authontication, createTask);
taskRouter.delete("/task/:taskId",authontication, deleteTaskById);
taskRouter.get("/alltasks",authontication,adminAuthorization, getAllTaskByAdmin);
taskRouter.delete("/taskadmin/:taskId",authontication,adminAuthorization, deleteTaskByAdmin);



module.exports = taskRouter;