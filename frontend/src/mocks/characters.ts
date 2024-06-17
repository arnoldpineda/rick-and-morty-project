import { ICharacter } from "../interfaces/character";

export const characters: Array<ICharacter> = [
  {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
    origin: {
      name: "Earth (C-137)",
      url: "https://rickandmortyapi.com/api/location/1",
    },
    location: {
      name: "Citadel of Ricks",
      url: "https://rickandmortyapi.com/api/location/3",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    comments: [
      { id: 1, text: "This character is awesome!" },
      { id: 2, text: "I love the episodes featuring this character." },
      { id: 3, text: "An interesting character with a unique background." },
    ],
  },
  {
    id: 2,
    name: "Morty Smith",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
    origin: {
      name: "Earth (C-137)",
      url: "https://rickandmortyapi.com/api/location/1",
    },
    location: {
      name: "Citadel of Ricks",
      url: "https://rickandmortyapi.com/api/location/3",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    comments: [
      { id: 1, text: "Morty is such a relatable character." },
      { id: 2, text: "His adventures with Rick are hilarious!" },
    ],
  },
  {
    id: 3,
    name: "Summer Smith",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Female",
    origin: {
      name: "Earth (Replacement Dimension)",
      url: "https://rickandmortyapi.com/api/location/20",
    },
    location: {
      name: "Earth (Replacement Dimension)",
      url: "https://rickandmortyapi.com/api/location/20",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
    comments: [
      { id: 1, text: "Summer's character development is great." },
      { id: 2, text: "She has some of the best one-liners!" },
    ],
  },
  {
    id: 4,
    name: "Beth Smith",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Female",
    origin: {
      name: "Earth (Replacement Dimension)",
      url: "https://rickandmortyapi.com/api/location/20",
    },
    location: {
      name: "Earth (Replacement Dimension)",
      url: "https://rickandmortyapi.com/api/location/20",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
    comments: [
      { id: 1, text: "Beth is such a strong character." },
      { id: 2, text: "Her relationship with Rick is fascinating." },
    ],
  },
  {
    id: 5,
    name: "Jerry Smith",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
    origin: {
      name: "Earth (Replacement Dimension)",
      url: "https://rickandmortyapi.com/api/location/20",
    },
    location: {
      name: "Earth (Replacement Dimension)",
      url: "https://rickandmortyapi.com/api/location/20",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
    comments: [
      { id: 1, text: "Jerry is the comic relief of the show." },
      { id: 2, text: "His antics are always entertaining." },
    ],
  },
  {
    id: 6,
    name: "Abadango Cluster Princess",
    status: "Alive",
    species: "Alien",
    type: "",
    gender: "Female",
    origin: {
      name: "Abadango",
      url: "https://rickandmortyapi.com/api/location/2",
    },
    location: {
      name: "Abadango",
      url: "https://rickandmortyapi.com/api/location/2",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
    comments: [
      { id: 1, text: "A unique character from a fascinating world." },
      { id: 2, text: "Would love to see more of her story." },
    ],
  },
  {
    id: 7,
    name: "Abradolf Lincler",
    status: "unknown",
    species: "Human",
    type: "Genetic experiment",
    gender: "Male",
    origin: {
      name: "Earth (Replacement Dimension)",
      url: "https://rickandmortyapi.com/api/location/20",
    },
    location: {
      name: "Unknown",
      url: "",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/7.jpeg",
    comments: [
      { id: 1, text: "A bizarre yet intriguing character." },
      { id: 2, text: "His backstory is both hilarious and tragic." },
    ],
  },
  {
    id: 8,
    name: "Adjudicator Rick",
    status: "Dead",
    species: "Human",
    type: "",
    gender: "Male",
    origin: {
      name: "Unknown",
      url: "",
    },
    location: {
      name: "Citadel of Ricks",
      url: "https://rickandmortyapi.com/api/location/3",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/8.jpeg",
    comments: [
      { id: 1, text: "One of the many Ricks with a unique role." },
      { id: 2, text: "His death was quite shocking." },
    ],
  },
  {
    id: 9,
    name: "Agency Director",
    status: "Dead",
    species: "Human",
    type: "",
    gender: "Male",
    origin: {
      name: "Earth (Replacement Dimension)",
      url: "https://rickandmortyapi.com/api/location/20",
    },
    location: {
      name: "Earth (Replacement Dimension)",
      url: "https://rickandmortyapi.com/api/location/20",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/9.jpeg",
    comments: [
      { id: 1, text: "A key character in some episodes." },
      { id: 2, text: "His role was short but impactful." },
    ],
  },
  {
    id: 10,
    name: "Alan Rails",
    status: "Dead",
    species: "Human",
    type: "Superhuman",
    gender: "Male",
    origin: {
      name: "Unknown",
      url: "",
    },
    location: {
      name: "Worldender's Lair",
      url: "https://rickandmortyapi.com/api/location/4",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/10.jpeg",
    comments: [
      { id: 1, text: "A fascinating character with superpowers." },
      { id: 2, text: "His demise was a turning point in the story." },
    ],
  },
];
