import { CreateClassDto } from './dto/create-class.dto';
import { PrismaService } from 'src/database/prisma.service';
export declare class ClassService {
    private prisma;
    constructor(prisma: PrismaService);
    remove(id: string): Promise<{
        id: string;
        name: string;
        course: string;
        academicYear: number;
    }>;
    create(data: CreateClassDto): Promise<{
        id: string;
        name: string;
        course: string;
        academicYear: number;
    }>;
    update(id: string, data: CreateClassDto): Promise<{
        id: string;
        name: string;
        course: string;
        academicYear: number;
    }>;
    delete(id: string): Promise<{
        id: string;
        name: string;
        course: string;
        academicYear: number;
    }>;
    findOne(id: string): Promise<{
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
}
