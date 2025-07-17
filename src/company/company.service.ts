import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Company } from './company.model';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Injectable()
export class CompanyService {
  constructor(@InjectModel(Company) private companyModel: typeof Company) { }

  async create(createCompanyDto: CreateCompanyDto): Promise<Company> {
    return this.companyModel.create(createCompanyDto);
  }

  async findOne(id: number): Promise<Company | null> {
    const company = await this.companyModel.findByPk(id);
    if (!company) throw new NotFoundException(`Company with ID ${id} not found`);
    return company;
  }

  async update(id: number, updateCompanyDto: UpdateCompanyDto): Promise<Company | null> {
    const company = await this.companyModel.findByPk(id);
    if (!company) throw new NotFoundException(`Company with ID ${id} not found`);
    await company.update(updateCompanyDto);
    return company;
  }
}
