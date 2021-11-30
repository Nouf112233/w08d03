
const taskModel = require("./../../db/models/task");
const userModel = require("./../../db/models/user");


const getTask = (req, res) => {
  const { id } = req.body;

  userModel
    .find({ _id: id })
    .then((result) => {
      taskModel
        .find({$and: [{user: id}, {isdeleted: false}] })
        .then((result) => {
          if (result) res.status(200).json(result);
          else res.status(400).json("this user not has any tasks");
        })
        .catch((err) => {
          res.status(400).send(err);
        });
    })
    .catch((err) => {
      res.status(400).json("User not found");
    });
};

const getTaskById = (req, res) => {
    const { userId, taskId } = req.body;
    userModel
      .findById({ _id: userId })
      .then((result) => {
        taskModel
          .find({$and: [{ _id: taskId},{ user: userId}, {isdeleted: false}] })
          .then((result) => {
            if (result) res.status(200).json(result);
            else res.status(400).send("user does not has this task");
          })
          .catch((err) => {
            res.status(400).send("user does not has this task");
          });
      })
      .catch((err) => {
        res.status(400).json("User not found");
      });
  };

  const deleteAllTask = (req, res) => {
    const { id } = req.body;
    userModel
      .findById({ _id: id })
      .then((result) => {
        taskModel
          .find({$and:[ {user: id}, {isdeleted: false}] })
          .then(async (result) => {
            if (result) {
              let doc = await taskModel.updateMany({ user: id }, { isdeleted: true });
  
              res.status(200).json(doc);
            } else res.status(400).send("user does not has this task");
          })
          .catch((err) => {
            res.status(400).send(err);
          });
      })
      .catch((err) => {
        res.status(400).json("User not found");
      });
  };

  const updateTask = (req, res) => {
    const { userId, taskId, taskName } = req.body;
  
    if (userId == undefined || taskId == undefined || taskName == undefined)
      return res.status(400).send("some data are missing");
    taskModel
      .findOne({$and: [ {_id: taskId}, {user: userId}, {isdeleted: false}] })
      .then(async (result) => {
        if (result) {
          let doc = await taskModel.findOneAndUpdate(
            { _id: taskId },
            { name: taskName },
            {
              new: true,
            }
          );
  
          res.status(200).json(doc);
        } else res.status(400).send("user does not has this task");
      })
      .catch((err) => {
        res.status(400).send("user does not has this task");
      });
  };

  const createTask = (req, res) => {
    const { name, user } = req.body;
  
    userModel
      .findById({ _id: user })
      .then((result) => {
        if (result) {
          const newTask = new taskModel({
            name,
            user,
          });
  
          newTask
            .save()
            .then((result) => {
              res.status(200).json(result);
            })
            .catch((err) => {
              res.status(400).send(err);
            });
        } else res.status(400).json("User not found");
      })
      .catch((err) => {
        res.status(400).json("User not found");
      });
  };

  const deleteTaskById = (req, res) => {
    const { userId, taskId } = req.body;
  
    userModel
      .findById({ _id: userId })
      .then((result) => {
        taskModel
          .findOne({$and: [{_id: taskId}, {user: userId}] })
          .then(async (result) => {
            if (result) {
              let doc = await taskModel.findOneAndUpdate(
                { _id: taskId },
                {
                    isdeleted: true,
                },
                {
                  new: true,
                }
              );
  
              res.status(200).json(doc);
            } else res.status(400).send("user does not has this task");
          })
          .catch((err) => {
            res.status(400).send("user does not has this task");
          });
      })
      .catch((err) => {
        res.status(400).json("User not found");
      });
  };




module.exports = { getTask,getTaskById,deleteAllTask,updateTask,createTask,deleteTaskById };




  
  