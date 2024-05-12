import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ClassService } from './class.service';
import { CreateClassDto } from './dto/create-class.dto';


@Controller('class')
export class ClassController {
  constructor(private readonly classService: ClassService) {}

    
  @Post()
  create(@Body()CreateClassDto : CreateClassDto) {
    return this.classService.create(CreateClassDto);
  }


  @Get()
  findAll() {
    return this.classService.findAll();
  }
  

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.classService.findOne(id);
  }


  
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() CreateClassDto: CreateClassDto,
  ) {
    return this.classService.update(id, CreateClassDto);
  }
  

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const deletedClass = await this.classService.remove(id);
    return { message: `Class com ID ${id} foi excluída com sucesso.`, deletedClass };
  }
}
