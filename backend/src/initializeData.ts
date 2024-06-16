import axios from 'axios';
import { sequelize } from './db'; // Importa la instancia de Sequelize configurada
import Character from './db/models/Character';
import Specie from './db/models/Specie';

async function initializeData() {
  try {
    await sequelize.sync(); // Sincroniza los modelos con la base de datos

    // Obtener los primeros 13 personajes de la API de Rick and Morty
    const response = await axios.get('https://rickandmortyapi.com/api/character/?page=1');
    const charactersData = response.data.results.slice(0, 13);

    // Inicializar las especies únicas
    const speciesSet = new Set<string>();
    charactersData.forEach((character: any) => {
      speciesSet.add(character.species);
    });

    const speciesData = Array.from(speciesSet).map((name: string) => ({ name }));

    // Verificar y crear especies en la base de datos si no existen
    const existingSpecies = await Specie.findAll();
    const existingSpeciesMap = new Map<string, Specie>();
    existingSpecies.forEach((specie) => {
      existingSpeciesMap.set(specie.name, specie);
    });

    const speciesToCreate = speciesData.filter((specie) => !existingSpeciesMap.has(specie.name));
    const createdSpecies = await Specie.bulkCreate(speciesToCreate, { returning: true });

    createdSpecies.forEach((specie) => {
      existingSpeciesMap.set(specie.name, specie);
    });

    // Mapear especies por nombre para hacer referencia en personajes
    const speciesMap = new Map<string, number>();
    existingSpeciesMap.forEach((specie, name) => {
      speciesMap.set(name, specie.id);
    });

    // Verificar y crear personajes en la base de datos si no existen
    const existingCharacters = await Character.findAll({
      where: {
        name: charactersData.map((character: any) => character.name),
      },
    });

    const existingCharacterNames = new Set(existingCharacters.map((character) => character.name));

    const charactersToCreate = charactersData
      .filter((character: any) => !existingCharacterNames.has(character.name))
      .map((character: any) => ({
        name: character.name,
        status: character.status,
        speciesId: speciesMap.get(character.species) || null,
        gender: character.gender,
        origin: character.origin.name,
        image: character.image,
      }));

    await Character.bulkCreate(charactersToCreate);

    console.log('Datos inicializados correctamente.');
    process.exit(0); // Terminar el proceso Node.js después de la inicialización
  } catch (error) {
    console.error('Error al inicializar los datos:', error);
    process.exit(1); // Terminar el proceso Node.js con error
  }
}

initializeData();
