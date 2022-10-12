import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { KampusService } from './kampus.service';


@Controller('kampus')
export class KampusController {
  constructor(private readonly kampusService: KampusService) { }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.kampusService.findKampusById(id);
  }

  @Get('/jurusan/:id')
  findJurusan(@Param('id') id: number) {
    return this.kampusService.listJurusan(id)
  }
}
