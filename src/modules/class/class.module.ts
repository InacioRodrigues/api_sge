import { Module } from '@nestjs/common';
import { ClassController } from './class.controller';
import { PrismaService } from 'src/database/prisma.service';
import { ClassService } from './class.service';

@Module({
  controllers: [ClassController],
  providers: [ClassService, PrismaService],
})
export class ClassModule {}
