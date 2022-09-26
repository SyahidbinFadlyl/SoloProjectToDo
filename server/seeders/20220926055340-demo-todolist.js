'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const data = require("../data/toDoList.json");
    const toDoList = data.map(list => {
      list.createdAt = list.updatedAt = new Date();
      return list;
    });
    await queryInterface.bulkInsert("ToDoLists", toDoList);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("ToDoLists", null, {});
  }
};
