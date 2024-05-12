import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './modules/student/student.module';
import { ClassModule } from './modules/class/class.module';
import { MatriculationModule } from './modules/matriculation/matriculation.module';
import { AuthModule } from './modules/auth/auth.module';
import { PrismaService } from './database/prisma.service';

@Module({
  imports: [StudentModule, ClassModule, MatriculationModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
