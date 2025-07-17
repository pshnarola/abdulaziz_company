import {
  IsInt,
  IsString,
  IsNotEmpty,
  IsOptional,
  IsEmail,
  IsUrl,
  IsPhoneNumber,
} from 'class-validator';

export class CreateCompanyDto {

  @IsInt()
  @IsNotEmpty()
  readonly country_id: number;

  @IsString()
  @IsNotEmpty()
  readonly company_name_ar: string;

  @IsString()
  @IsNotEmpty()
  readonly company_name_en: string;

  @IsString()
  @IsNotEmpty()
  readonly district_ar?: string;

  @IsString()
  @IsNotEmpty()
  readonly district_en?: string;

  @IsString()
  @IsNotEmpty()
  readonly street_ar?: string;

  @IsString()
  @IsNotEmpty()
  readonly street_en?: string;

  @IsString()
  @IsNotEmpty()
  readonly region?: string;

  @IsString()
  @IsNotEmpty()
  readonly city?: string;

  @IsString()
  @IsNotEmpty()
  readonly building_number?: string;

  @IsString()
  @IsNotEmpty()
  readonly additional_number?: string;

  @IsString()
  @IsNotEmpty()
  readonly floor_number?: string;

  @IsString()
  @IsNotEmpty()
  readonly office_number?: string;

  @IsString()
  @IsNotEmpty()
  readonly po_box?: string;

  @IsString()
  @IsNotEmpty()
  readonly zip_code?: string;

  @IsString()
  @IsNotEmpty()
  @IsPhoneNumber()
  readonly phone?: string;

  @IsEmail()
  @IsOptional()
  readonly email?: string;

  @IsUrl()
  @IsOptional()
  readonly website?: string;

  @IsString()
  @IsOptional()
  readonly whatsapp_number?: string;

  @IsString()
  @IsNotEmpty()
  readonly vat_number?: string;

  @IsString()
  @IsNotEmpty()
  readonly cr_number?: string;

  @IsString()
  @IsOptional()
  readonly nphies_id?: string;

  @IsString()
  @IsNotEmpty()
  readonly address_ar?: string;

  @IsString()
  @IsNotEmpty()
  readonly address_en?: string;
}
