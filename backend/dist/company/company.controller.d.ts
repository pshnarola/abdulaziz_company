import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
export declare class CompanyController {
    private readonly companyService;
    constructor(companyService: CompanyService);
    create(createCompanyDto: CreateCompanyDto): Promise<import("./company.model").Company>;
    findOne(id: string): Promise<import("./company.model").Company | null>;
    update(id: string, updateCompanyDto: UpdateCompanyDto): Promise<import("./company.model").Company | null>;
}
