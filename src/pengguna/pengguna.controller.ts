import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PenggunaService } from './pengguna.service';
import { CreatePenggunaDto } from './dto/create-pengguna.dto';


@Controller('pengguna')
export class PenggunaController {
  constructor(private readonly penggunaService: PenggunaService) { }

  @Post()
  create(@Body() createPenggunaDto: CreatePenggunaDto) {
    return this.penggunaService.create(createPenggunaDto);
  }

  @Get()
  findAll() {
    return this.penggunaService.findAll();
  }

}
