import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
} from 'sequelize-typescript';
import { Country } from './country.model';

interface CompanyCreationAttrs {
  country_id: number;
  company_name_ar: string;
  company_name_en: string;
  district_ar?: string;
  district_en?: string;
  street_ar?: string;
  street_en?: string;
  region?: string;
  city?: string;
  building_number?: string;
  additional_number?: string;
  floor_number?: string;
  office_number?: string;
  po_box?: string;
  zip_code?: string;
  phone?: string;
  email?: string;
  website?: string;
  whatsapp_number?: string;
  vat_number?: string;
  cr_number?: string;
  nphies_id?: string;
  address_ar?: string;
  address_en?: string;
}

@Table
export class Company extends Model<Company, CompanyCreationAttrs> {

  @Column({ type: DataType.STRING, allowNull: false })
  company_name_ar: string;

  @Column({ type: DataType.STRING, allowNull: false })
  company_name_en: string;

  @Column(DataType.STRING)
  district_ar?: string;

  @Column(DataType.STRING)
  district_en?: string;

  @Column(DataType.STRING)
  street_ar?: string;

  @Column(DataType.STRING)
  street_en?: string;

  @ForeignKey(() => Country)
  @Column({ type: DataType.INTEGER, allowNull: false })
  country_id: number;

  @Column(DataType.STRING)
  region?: string;

  @Column(DataType.STRING)
  city?: string;

  @Column(DataType.STRING)
  building_number?: string;

  @Column(DataType.STRING)
  additional_number?: string;

  @Column(DataType.STRING)
  floor_number?: string;

  @Column(DataType.STRING)
  office_number?: string;

  @Column(DataType.STRING)
  po_box?: string;

  @Column(DataType.STRING)
  zip_code?: string;

  @Column(DataType.STRING)
  phone?: string;

  @Column(DataType.STRING)
  email?: string;

  @Column(DataType.STRING)
  website?: string;

  @Column(DataType.STRING)
  whatsapp_number?: string;

  @Column(DataType.STRING)
  vat_number?: string;

  @Column(DataType.STRING)
  cr_number?: string;

  @Column(DataType.STRING)
  nphies_id?: string;

  @Column(DataType.TEXT)
  address_ar?: string;

  @Column(DataType.TEXT)
  address_en?: string;
}