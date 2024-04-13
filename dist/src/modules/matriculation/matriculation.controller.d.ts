import { MatriculationService } from './matriculation.service';
import { CreateMatriculationDto } from './dto/create-matriculation.dto';
import { UpdateMatriculationDto } from './dto/update-matriculation.dto';
export declare class MatriculationController {
    private readonly matriculationService;
    constructor(matriculationService: MatriculationService);
    create(createMatriculationDto: CreateMatriculationDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateMatriculationDto: UpdateMatriculationDto): string;
    remove(id: string): string;
}
