// class.controller.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClassDto } from './dto/create-class.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class ClassService { 
  constructor(private prisma: PrismaService) {}

  async remove(id: string) {
    try {
      const deletedClass = await this.prisma.class.delete({
        where: { id },
      });

      return deletedClass;
    } catch (error) {
      throw new NotFoundException(`Class com ID ${id} não encontrado`);
    }
  }

  async create(data: CreateClassDto) {
    try {
      const { name, course, academicYear } = data;

      const classInstance = await this.prisma.class.create({
        data: {
          name,
          course,
          academicYear,
        },
      });

      return classInstance;
    } catch (error) {
      throw new Error('Falha ao criar class');
    }
  }

  async update(id: string, data: CreateClassDto) {
    try {
      const { name, course, academicYear } = data;

      const updatedClass = await this.prisma.class.update({
        where: { id },
        data: {
          name,
          course,
          academicYear,
        },
      });

      return updatedClass;
    } catch (error) {
      throw new Error(`Falha ao atualizar class com ID ${id}: ${error.message}`);
    }
  }

  async delete(id: string) {
    try {
      const deletedClass = await this.prisma.class.delete({
        where: { id },
      });

      return deletedClass;
    } catch (error) {
      throw new NotFoundException(`Class com ID ${id} não encontrada`);
    }
  }

  async findOne(id: string) {
    try {
      const classInstance = await this.prisma.class.findUnique({
        where: { id },
      });

      return classInstance;
    } catch (error) {
      throw new NotFoundException(`Class com ID ${id} não encontrada`);
    }
  }

  async findAll() {
    try {
      const classes = await this.prisma.class.findMany();
      return classes;
    } catch (error) {
      throw new Error('Falha ao obter classes');
    }
  }
}
