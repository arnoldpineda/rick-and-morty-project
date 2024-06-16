'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('users', [
      {
        id: 1,
        username: 'devpineda',
        password: '1234',
      }
    ], {});
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
