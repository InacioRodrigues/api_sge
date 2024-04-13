import { Controller, Get, Post, Put, Delete, UseInterceptors, UploadedFile, Body, Param, BadRequestException, NotFoundException, UseGuards, Request, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { useContainer } from 'class-validator';
import { JwtAuthGuard } from './jwt-auth.guard';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('profile')
  async getProfileToken(@Body('email') email: string, @Body('password') password: string) {
    try {
      const token = await this.authService.getProfileToken(email, password);
      return { token, message: 'Token JWT gerado com sucesso!' };
    } catch (error) {
      throw new UnauthorizedException('Credenciais inválidas');
    }
  }
  
  
  @Get('profile')
 @UseGuards(JwtAuthGuard) 
async getProfile(@Request() req) {
  
  const user = req.user;

  // Remova a propriedade "password" do objeto do usuário antes de retorná-lo
  const { password, ...userWithoutPassword } = user;

  return userWithoutPassword;
}


@Post('login')
async login(@Request() req, @Body('email') email: string, @Body('password') password: string) {
  try {
    const result = await this.authService.login(email, password);
    if (!result) {
      throw new UnauthorizedException('Credenciais inválidas');
    }
    return result;
  } catch (error) {
    throw new UnauthorizedException('Credenciais inválidas');
  }
}

  

  @Put(':id')
  @UseInterceptors(FileInterceptor('file'))
  async updateUser(
    @Param('id') id: number,
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    try {
      const updatedUser = await this.authService.updateUser(id, email, password,);
      return { user: updatedUser, message: 'User atualizado!' };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }


  @Delete(':id')
  async deleteUser(@Param('id') id: number) {
    try {
      const deletedUser = await this.authService.deleteUser(id);
      if (!deletedUser) {
        throw new NotFoundException('User nao encontrado.');
      }
      return { user: deletedUser, message: 'User deletado com sucesso!' };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }



  @Get()
  async findAllUsers() {
    try {
      const users = await this.authService.findAllUsers();
      return { users };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }



  @Post('register')
  @UseInterceptors(FileInterceptor('file'))
  async register(
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    try {
      const user = await this.authService.register( email, password,);
      return { user, message: 'User registado com sucesso!' };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }



  @Post('logout')
  async logout(@Request() req) {
    try {
      return { message: 'Logout successful' };
    } catch (error) {
      throw new UnauthorizedException('Logout failed');
    }
  }
}
