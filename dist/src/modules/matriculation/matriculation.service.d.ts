import { CreateMatriculationDto } from './dto/create-matriculation.dto';
import { UpdateMatriculationDto } from './dto/update-matriculation.dto';
export declare class MatriculationService {
    create(createMatriculationDto: CreateMatriculationDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateMatriculationDto: UpdateMatriculationDto): string;
    remove(id: number): string;
}
