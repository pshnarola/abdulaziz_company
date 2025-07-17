import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement } from 'sequelize-typescript';

@Table
export class Country extends Model {

  @Column(DataType.STRING)
  country_name_ar: string;

  @Column(DataType.STRING)
  country_name_en: string;
}