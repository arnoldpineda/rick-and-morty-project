"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('characters', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      speciesId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'species',
          key: 'id',
        },
      },
      gender: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      origin: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      image: {
        type: Sequelize.STRING,
        allowNull: false,
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
      deletedAt: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: null,
      },
    });

    await queryInterface.addIndex('characters', ['status']);
    await queryInterface.addIndex('characters', ['speciesId']);
    await queryInterface.addIndex('characters', ['gender']);
    await queryInterface.addIndex('characters', ['origin']);
    await queryInterface.addIndex('characters', ['deletedAt']);
  },

  down: async (queryInterface) => {
    await queryInterface.removeIndex('characters', ['status']);
    await queryInterface.removeIndex('characters', ['speciesId']);
    await queryInterface.removeIndex('characters', ['gender']);
    await queryInterface.removeIndex('characters', ['origin']);
    await queryInterface.removeIndex('characters', ['deletedAt']);

    await queryInterface.dropTable('characters');
  },
};
