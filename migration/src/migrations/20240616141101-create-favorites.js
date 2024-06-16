"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('favorites', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
      },
      characterId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'characters',
          key: 'id',
        },
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });

    await queryInterface.addConstraint('favorites', {
      type: 'unique',
      name: 'unique_user_character',
      fields: ['userId', 'characterId'],
    });

    await queryInterface.addIndex('favorites', ['userId']);
    await queryInterface.addIndex('favorites', ['characterId']);
  },

  down: async (queryInterface) => {
    await queryInterface.removeIndex('favorites', ['userId']);
    await queryInterface.removeIndex('favorites', ['characterId']);

    await queryInterface.removeConstraint('favorites', 'unique_user_character');

    await queryInterface.dropTable('favorites');
  },
};
