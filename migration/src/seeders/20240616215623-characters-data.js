'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('characters', [
      {
        id: 1,
        name: 'Rick Sanchez',
        status: 'Alive',
        speciesId: 1,
        gender: 'Male',
        origin: 'Earth (C-137)',
        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      },
      {
        id: 2,
        name: 'Morty Smith',
        status: 'Alive',
        speciesId: 1,
        gender: 'Male',
        origin: 'unknown',
        image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
      },
      {
        id: 3,
        name: 'Summer Smith',
        status: 'Alive',
        speciesId: 1,
        gender: 'Female',
        origin: 'Earth (Replacement Dimension)',
        image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
      },
      {
        id: 4,
        name: 'Beth Smith',
        status: 'Alive',
        speciesId: 1,
        gender: 'Female',
        origin: 'Earth (Replacement Dimension)',
        image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
      },
      {
        id: 5,
        name: 'Jerry Smith',
        status: 'Alive',
        speciesId: 1,
        gender: 'Male',
        origin: 'Earth (Replacement Dimension)',
        image: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
      },
      {
        id: 6,
        name: 'Abadango Cluster Princess',
        status: 'Alive',
        speciesId: 2,
        gender: 'Female',
        origin: 'Abadango',
        image: 'https://rickandmortyapi.com/api/character/avatar/6.jpeg',
      },
      {
        id: 7,
        name: 'Abradolf Lincler',
        status: 'unknown',
        speciesId: 1,
        gender: 'Male',
        origin: 'Earth (Replacement Dimension)',
        image: 'https://rickandmortyapi.com/api/character/avatar/7.jpeg',
      },
      {
        id: 8,
        name: 'Adjudicator Rick',
        status: 'Dead',
        speciesId: 1,
        gender: 'Male',
        origin: 'unknown',
        image: 'https://rickandmortyapi.com/api/character/avatar/8.jpeg',
      },
      {
        id: 9,
        name: 'Agency Director',
        status: 'Dead',
        speciesId: 1,
        gender: 'Male',
        origin: 'Earth (Replacement Dimension)',
        image: 'https://rickandmortyapi.com/api/character/avatar/9.jpeg',
      },
      {
        id: 10,
        name: 'Alan Rails',
        status: 'Dead',
        speciesId: 1,
        gender: 'Male',
        origin: 'unknown',
        image: 'https://rickandmortyapi.com/api/character/avatar/10.jpeg',
      },
    ], {});
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('characters', null, {});
  }
};
