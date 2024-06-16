import { Table, Column, Model, DataType, CreatedAt, UpdatedAt, Index, HasMany } from 'sequelize-typescript';
import { SpecieAttributes } from '../../interfaces/interfaces';
import Character from './Character';

@Table({
  timestamps: true,
  tableName: 'species',
  modelName: 'Specie',
})
export default class Specie extends Model<SpecieAttributes> {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @Index
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  declare name: string;

  @CreatedAt
  declare createdAt: Date;

  @UpdatedAt
  declare updatedAt: Date;

  @HasMany(() => Character)
  declare characters: Character[];
}
