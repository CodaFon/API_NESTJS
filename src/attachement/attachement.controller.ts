import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AttachementService } from './attachement.service';
import { CreateAttachementDto } from './dto/create-attachement.dto';
import { UpdateAttachementDto } from './dto/update-attachement.dto';

@Controller('attachement')
export class AttachementController {
  constructor(private readonly attachementService: AttachementService) {}

  @Post()
  create(@Body() createAttachementDto: CreateAttachementDto) {
    return this.attachementService.create(createAttachementDto);
  }

  @Get()
  findAll() {
    return this.attachementService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.attachementService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAttachementDto: UpdateAttachementDto) {
    return this.attachementService.update(+id, updateAttachementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.attachementService.remove(+id);
  }
}
