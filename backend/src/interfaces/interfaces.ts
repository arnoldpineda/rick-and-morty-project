export interface CharacterAttributes {
  id?: number;
  name: string;
  status: string;
  speciesId: number;
  gender: string;
  origin: string;
  image: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;
}

export interface SpecieAttributes {
  id?: number;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface UserAttributes {
  id?: number;
  username: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CommentAttributes {
  id?: number;
  userId: number;
  characterId: number;
  content: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface FavoriteAttributes {
  id?: number;
  userId: number;
  characterId: number;
  createdAt?: Date;
  updatedAt?: Date;
}
