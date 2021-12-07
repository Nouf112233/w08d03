const taskModel = require("./../../db/models/task");
const userModel = require("./../../db/models/user");

const getTask = (req, res) => {
  const tokenId=req.token.id;

  taskModel
    .find({ $and: [{ user: tokenId }, { isdeleted: false }] })
    .then((result) => {
      if (result) res.status(200).json(result);
      else res.status(400).json("this user not has any tasks");
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

const getTaskById = (req, res) => {
  const tokenId=req.token.id;
  const {  taskId } = req.body;
  taskModel
    .find({ $and: [{ _id: taskId }, { user: tokenId }, { isdeleted: false }] })
    .then((result) => {
      if (result) res.status(200).json(result);
      else res.status(400).send("user does not has this task");
    })
    .catch((err) => {
      res.status(400).send("user does not has this task");
    });
};

const deleteAllTask = (req, res) => {
  const tokenId=req.token.id;
 
  taskModel
    .find({ $and: [{ user:tokenId }, { isdeleted: false }] })
    .then(async (result) => {
      if (result) {
        let doc = await taskModel.updateMany(
          { user: userId },
          { isdeleted: true }
        );

        res.status(200).json(doc);
      } else res.status(400).send("user does not has this task");
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

const updateTask = (req, res) => {
  const tokenId=req.token.id;
  const { taskId, taskName } = req.body;

  taskModel
    .findOne({
      $and: [{ _id: taskId }, { user: tokenId }, { isdeleted: false }],
    })
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
  const tokenId=req.token.id;
  const { name } = req.body;

  const newTask = new taskModel({
    name,
    user:tokenId,
  });

  newTask
    .save()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

const deleteTaskById = (req, res) => {
  const tokenId=req.token.id;
  const {  taskId } = req.params;
      taskModel
        .findOne({ $and: [{ _id: taskId }, { user: tokenId }] })
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
    
};

const getAllTaskByAdmin = (req, res) => {

  taskModel
    .find({ isdeleted: false })
    .then((result) => {
      if (result) res.status(200).json(result);
      else res.status(400).json("no tasks");
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

const deleteTaskByAdmin = (req, res) => {

  const {  taskId } = req.params;
      taskModel
        .findOne({ _id: taskId })
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
    
};

const getTaskByAdmin = (req, res) => {
  const {userId}=req.params;

  taskModel
    .find({ $and: [{ user: userId }, { isdeleted: false }] })
    .then((result) => {
      if (result) res.status(200).json(result);
      else res.status(400).json("this user not has any tasks");
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

module.exports = {
  getTask,
  getTaskById,
  deleteAllTask,
  updateTask,
  createTask,
  deleteTaskById,
  getAllTaskByAdmin,
  deleteTaskByAdmin,
  getTaskByAdmin
};
