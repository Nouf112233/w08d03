const taskModel = require("./../../db/models/task");

const addtask = (req, res) => {
  const { name,id } = req.body;
  const newTask = new taskModel({
       name,
       user:id
  });
  newTask
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
        res.status(400).json(err);
    });
};

const getRoles = (req, res) =>{
    roleModel
    .find({})
    .then((result) => {
        res.status(201).json(result);
      
    })
    .catch((err) => {
        res.status(400).json(err);
      
    });
  };

module.exports = { addtask };