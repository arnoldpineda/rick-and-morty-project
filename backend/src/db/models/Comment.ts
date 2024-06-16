import { Table, Column, Model, DataType, ForeignKey, BelongsTo, Index, CreatedAt, UpdatedAt } from 'sequelize-typescript';
import { CommentAttributes } from '../../interfaces/interfaces';
import Character from './Character';
import User from './User';

@Table({
  timestamps: true,
  tableName: 'comments',
  modelName: 'Comment',
  indexes: [
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
export default class Comment extends Model<CommentAttributes> {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @ForeignKey(() => Character)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare characterId: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare userId: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare content: string;

  @BelongsTo(() => Character)
  declare character: Character;

  @BelongsTo(() => User)
  declare user: User;

  @CreatedAt
  declare createdAt: Date;

  @UpdatedAt
  declare updatedAt: Date;
}
