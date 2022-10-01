const ToDoListController = require("../controllers/toDoList");
const { authorizationList } = require("../middlewares/authorization");
const toDoList = require("express").Router();

toDoList.get("/", ToDoListController.getAllToDoList);
toDoList.post("/", ToDoListController.createNewToDoList);
toDoList.patch("/:toDoListId", authorizationList, ToDoListController.updateStatusToDoListById);
toDoList.delete("/:toDoListId", authorizationList, ToDoListController.deleteToDoListById);


module.exports = toDoList;