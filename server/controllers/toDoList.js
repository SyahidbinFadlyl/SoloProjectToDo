const { ToDoList } = require("../models");

class ToDoListController {
    static async getAllToDoList(req, res, next) {
        try {
            const { id } = req.user;
            const getList = await ToDoList.findAll({
                where: {
                    UserId: id
                },
                order: [
                    ['id', 'DESC']
                ]
            });
            res.status(200).json(getList);
        } catch (error) {
            next(error);
        }

    }

    static async createNewToDoList(req, res, next) {
        try {
            const { id } = req.user;
            const { name } = req.body;
            const createNewToDoList = await ToDoList.create({
                name,
                UserId: id,
                status: false
            });
            res.status(201).json({
                message: "Success Create New Task",
                name: createNewToDoList.name
            });
        } catch (error) {
            next(error);
        }
    }

    static async updateStatusToDoListById(req, res, next) {
        try {
            const { toDoListId } = req.params;
            const { status } = req.body;
            const updateToDoList = await ToDoList.update(
                {
                    status,
                    updatedAt: new Date().toString()
                },
                {
                    where: {
                        id: toDoListId,
                    }
                }
            );
            res.status(200).json({
                message: "Succes Update Status"
            });
        } catch (error) {
            next(error);
        }
    }

    static async deleteToDoListById(req, res, next) {
        try {
            const { toDoListId } = req.params;
            const deleteToDoList = await ToDoList.destroy({
                where: {
                    id: toDoListId
                }
            });
            res.status(200).json({
                message: "Success Delete"
            });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = ToDoListController;