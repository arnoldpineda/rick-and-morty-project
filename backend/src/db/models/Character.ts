import { Table, Column, Model, DataType, CreatedAt, UpdatedAt, ForeignKey, DeletedAt, Index, BelongsTo } from 'sequelize-typescript';
import { CharacterAttributes } from '../../interfaces/attributes';
import Specie from './Specie';

@Table({
  timestamps: true,
  tableName: 'characters',
  modelName: 'Character',
})
export default class Character extends Model<CharacterAttributes> {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @Index
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare name: string;

  @Index
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare status: string;

  @ForeignKey(() => Specie)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare speciesId: number;

  @BelongsTo(() => Specie)
  declare species: Specie;

  @Index
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare gender: string;

  @Index
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare origin: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare image: string;

  @CreatedAt
  declare createdAt: Date;

  @UpdatedAt
  declare updatedAt: Date;

  @DeletedAt
  declare deletedAt: Date;
}
