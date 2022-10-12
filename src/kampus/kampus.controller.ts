import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { KampusService } from './kampus.service';
import { CreateKampusDto } from './dto/create-kampus.dto';
import { UpdateKampusDto } from './dto/update-kampus.dto';

@Controller('kampus')
export class KampusController {
  constructor(private readonly kampusService: KampusService) {}

  @Post()
  create(@Body() createKampusDto: CreateKampusDto) {
    return this.kampusService.create(createKampusDto);
  }

  @Get()
  findAll() {
    return this.kampusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kampusService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKampusDto: UpdateKampusDto) {
    return this.kampusService.update(+id, updateKampusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.kampusService.remove(+id);
  }
}
