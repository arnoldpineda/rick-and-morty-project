'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('species', [
      {
        id: 1,
        name: 'Human',
      },
      {
        id: 2,
        name: 'Alien',
      }
    ], {});
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('species', null, {});
  }
};
