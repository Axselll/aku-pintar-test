import { Injectable } from '@nestjs/common';
import { CreatePenggunaDto } from './dto/create-pengguna.dto';


@Injectable()
export class PenggunaService {
  create(createPenggunaDto: CreatePenggunaDto) {
    return 'This action adds a new pengguna';
  }

  findAll() {
    return `This action returns all pengguna`;
  }
}
