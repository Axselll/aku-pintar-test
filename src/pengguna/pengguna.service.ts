import { Injectable } from '@nestjs/common';
import { CreatePenggunaDto } from './dto/create-pengguna.dto';
import { UpdatePenggunaDto } from './dto/update-pengguna.dto';

@Injectable()
export class PenggunaService {
  create(createPenggunaDto: CreatePenggunaDto) {
    return 'This action adds a new pengguna';
  }

  findAll() {
    return `This action returns all pengguna`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pengguna`;
  }

  update(id: number, updatePenggunaDto: UpdatePenggunaDto) {
    return `This action updates a #${id} pengguna`;
  }

  remove(id: number) {
    return `This action removes a #${id} pengguna`;
  }
}
