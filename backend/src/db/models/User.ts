import { Table, Column, Model, DataType, CreatedAt, UpdatedAt, Index } from 'sequelize-typescript';
import { UserAttributes } from '../../interfaces/attributes';

@Table({
  timestamps: true,
  tableName: 'users',
  modelName: 'User',
})
export default class User extends Model<UserAttributes> {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @Index({
    unique: true,
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare username: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare password: string;

  @CreatedAt
  declare createdAt: Date;

  @UpdatedAt
  declare updatedAt: Date;
}
