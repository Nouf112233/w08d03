
const taskModel = require("./../../db/models/task");
const userModel = require("./../../db/models/user");


const getTask = (req, res) => {
  const { id } = req.body;

  userModel
    .find({ _id: id })
    .then((result) => {
      taskModel
        .find({ user: id, isDel: false })
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




module.exports = { getTask };

