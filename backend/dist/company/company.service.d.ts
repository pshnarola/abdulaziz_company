import { Company } from './company.model';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
export declare class CompanyService {
    private companyModel;
    constructor(companyModel: typeof Company);
    create(createCompanyDto: CreateCompanyDto): Promise<Company>;
    findOne(id: number): Promise<Company | null>;
    update(id: number, updateCompanyDto: UpdateCompanyDto): Promise<Company | null>;
}
