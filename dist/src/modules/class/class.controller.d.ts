import { ClassService } from './class.service';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
export declare class ClassController {
    private readonly classService;
    constructor(classService: ClassService);
    create(createClassDto: CreateClassDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateClassDto: UpdateClassDto): string;
    remove(id: string): string;
}
