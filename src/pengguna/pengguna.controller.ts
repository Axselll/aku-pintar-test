import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PenggunaService } from './pengguna.service';
import { CreateFollowDto } from './dto/create-follow.dto';

@Controller('pengguna')
export class PenggunaController {
  constructor(private readonly penggunaService: PenggunaService) { }

  @Post()
  create(@Body() body: CreateFollowDto) {
    return this.penggunaService.input(body);
  }

  @Get('mengikuti')
  findAll() {
    return this.penggunaService.cariSemuaData();
  }

  @Get('/:id')
  findone(@Param('id') id: number) {
    return this.penggunaService.cariDataSatuPengguna(id)
  }
}
