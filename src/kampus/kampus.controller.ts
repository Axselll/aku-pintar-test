import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { KampusService } from './kampus.service';
import { CreateKampusDto } from './dto/create-kampus.dto';
import { UpdateKampusDto } from './dto/update-kampus.dto';

@Controller('kampus')
export class KampusController {
  constructor(private readonly kampusService: KampusService) { }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.kampusService.findKampusById(id);
  }
}
