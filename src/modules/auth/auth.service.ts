import { Injectable, BadRequestException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.servce';
import { Prisma, User } from '@prisma/client';
import * as bcrypt from 'bcrypt'
import { diskStorage } from 'multer';
import { extname } from 'path';
import { Express } from 'express';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService,  private readonly jwtService: JwtService,) {}

  async register( email: string, password: string, isAdmin: boolean = true) {
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await this.prisma.user.create({
        data: {
          email,
          password: hashedPassword,
          //isAdmin, // Defina a propriedade isAdmin com base no valor fornecido
        },  
      });
  
      return user;
    } catch (error) {
      throw error;
    }
  }

  async login(email: string, password: string) {
    try {
      const user = await this.prisma.user.findUnique({
        where: { email },
      });
  
      if (!user) {
        return null;
      }
  
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        throw new BadRequestException('Senha incorreta.');
      }
  
      // Aqui você pode gerar e retornar um token JWT se o login for bem-sucedido.
      const token = this.generateJwtToken(user);
  
      return { user, token, message: 'Login successful!' };
    } catch (error) {
      throw error;
    }
  }
  
  
  
  private generateJwtToken(user: User) {
    const payload = { sub: user.id, }; 
    return this.jwtService.sign(payload);
  }
  

  async findAllUsers(): Promise<User[]> {
    try {
      return this.prisma.user.findMany();
    } catch (error) {
      
      throw error;
    }
  }

  
  async validateUserById(id: string): Promise<User | null> {
    try {
      return this.prisma.user.findUnique({
        where: { id },
      });
    } catch (error) {
      throw error;
    }
  }z

  async updateUser(id: string, email: string, password: string) {
    try {
      const hashedPassword = await bcrypt.hash(password, 10);

      return this.prisma.user.update({
        where: { id },
        data: {
          email,
          password: hashedPassword,
        },
      });
    } catch (error) {
      
      throw error;
    }
  }

  
  async deleteUser(id: string): Promise<User> {
    try {
      return this.prisma.user.delete({ where: { id } });
    } catch (error) {
     
      throw error;
    }
  }

  async getProfileToken(email: string, password: string) {
    try {
      const user = await this.prisma.user.findUnique({
        where: { email },
      });
  
      if (!user) {
        throw new UnauthorizedException('Usuário não encontrado');
      }
  
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        throw new UnauthorizedException('Senha incorreta');
      }
  
      // Aqui você pode gerar e retornar um token JWT se as credenciais estiverem corretas.
      const token = this.generateJwtToken(user);
  
      return token;
    } catch (error) {
      throw error;
    }
  }
  

  
}