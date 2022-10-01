const { ToDoList } = require("../models");
const authorizationList = async (req, res, next) => {
    try {
        const { toDoListId } = req.params;
        const { id } = req.user;
        const findToDoList = await ToDoList.findByPk(toDoListId);
        if (!findToDoList) {
            throw { name: "NotFound" };
        }
        console.log(findToDoList);
        if (findToDoList.UserId !== id) {
            throw { name: "Forbidden" };
        }
        next();
    } catch (error) {
        next(error);
    }
};

module.exports = {
    authorizationList
};