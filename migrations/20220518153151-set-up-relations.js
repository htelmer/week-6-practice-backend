"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("spaces", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("stories", "spaceId", {
      type: Sequelize.INTEGER,
      references: {
        model: "spaces",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("spaces", "userId");
    await queryInterface.removeColumn("stories", "spaceId");
  },
};

// module.exports = {
//   async up(queryInterface, Sequelize) {
//     await queryInterface.addColumn("todoItems", "todoListId", {
//       type: Sequelize.INTEGER,
//       references: {
//         model: "todoLists",
//         key: "userId",
//       },
//       onUpdate: "CASCADE",
//       onDelete: "SET NULL",
//     });
//   },

/**
 * Add reverting commands here.
 *
 * Example:
 * await queryInterface.dropTable('users');
 */
