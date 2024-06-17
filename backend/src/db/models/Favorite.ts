import { Table, Column, Model, DataType, ForeignKey, BelongsTo, Index, CreatedAt, UpdatedAt } from 'sequelize-typescript';
import { FavoriteAttributes } from '../../interfaces/attributes';
import User from './User';
import Character from './Character';

@Table({
  timestamps: true,
  tableName: 'favorites',
  modelName: 'Favorite',
  indexes: [
    {
      name: 'uniqueUserCharacter',
      unique: true,
      fields: ['userId', 'characterId'],
    },
    {
      name: 'indexedUserId',
      fields: ['userId'],
    },
    {
      name: 'indexedCharacterId',
      fields: ['characterId'],
    } 
  ]
})
export default class Favorite extends Model<FavoriteAttributes> {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare userId: number;

  @ForeignKey(() => Character)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare characterId: number;

  @CreatedAt
  declare createdAt: Date;

  @UpdatedAt
  declare updatedAt: Date;

  @BelongsTo(() => User)
  declare user: User;

  @BelongsTo(() => Character)
  declare character: Character;
}
