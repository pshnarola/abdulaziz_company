import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Company } from './company.model';
import { Country } from './country.model';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';

@Module({
  imports: [SequelizeModule.forFeature([Company, Country])],
  providers: [CompanyService],
  controllers: [CompanyController],
})
export class CompanyModule { }