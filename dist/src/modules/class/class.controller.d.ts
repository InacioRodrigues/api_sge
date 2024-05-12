import { ClassService } from './class.service';
import { CreateClassDto } from './dto/create-class.dto';
export declare class ClassController {
    private readonly classService;
    constructor(classService: ClassService);
    create(CreateClassDto: CreateClassDto): Promise<{
        id: string;
        name: string;
        course: string;
        academicYear: number;
    }>;
    findAll(): Promise<{
        id: string;
        name: string;
        course: string;
        academicYear: number;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        name: string;
        course: string;
        academicYear: number;
    }>;
    update(id: string, CreateClassDto: CreateClassDto): Promise<{
        id: string;
        name: string;
        course: string;
        academicYear: number;
    }>;
    remove(id: string): Promise<{
        message: string;
        deletedClass: {
            id: string;
            name: string;
            course: string;
            academicYear: number;
        };
    }>;
}
