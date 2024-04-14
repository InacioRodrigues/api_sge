import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaService } from 'src/database/prisma.servce';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';


@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'minhachavesecreta',
      signOptions: { expiresIn: '1h' },
    }),
  ], 
  controllers: [AuthController],
  providers: [AuthService, PrismaService],
})
export class AuthModule {}
