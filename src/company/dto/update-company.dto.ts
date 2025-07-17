import {
    IsInt,
    IsString,
    IsOptional,
    IsEmail,
    IsUrl,
    IsPhoneNumber
} from 'class-validator';

export class UpdateCompanyDto {
    @IsInt()
    @IsOptional()
    readonly country_id?: number;

    @IsString()
    @IsOptional()
    readonly company_name_ar?: string;

    @IsString()
    @IsOptional()
    readonly company_name_en?: string;

    @IsString()
    @IsOptional()
    readonly district_ar?: string;

    @IsString()
    @IsOptional()
    readonly district_en?: string;

    @IsString()
    @IsOptional()
    readonly street_ar?: string;

    @IsString()
    @IsOptional()
    readonly street_en?: string;

    @IsString()
    @IsOptional()
    readonly region?: string;

    @IsString()
    @IsOptional()
    readonly city?: string;

    @IsString()
    @IsOptional()
    readonly building_number?: string;

    @IsString()
    @IsOptional()
    readonly additional_number?: string;

    @IsString()
    @IsOptional()
    readonly floor_number?: string;

    @IsString()
    @IsOptional()
    readonly office_number?: string;

    @IsString()
    @IsOptional()
    readonly po_box?: string;

    @IsString()
    @IsOptional()
    readonly zip_code?: string;

    @IsString()
    @IsOptional()
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
    @IsOptional()
    readonly vat_number?: string;

    @IsString()
    @IsOptional()
    readonly cr_number?: string;

    @IsString()
    @IsOptional()
    readonly nphies_id?: string;

    @IsString()
    @IsOptional()
    readonly address_ar?: string;

    @IsString()
    @IsOptional()
    readonly address_en?: string;
}
