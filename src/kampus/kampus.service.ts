import { Injectable } from '@nestjs/common';
import { CreateKampusDto } from './dto/create-kampus.dto';
import { UpdateKampusDto } from './dto/update-kampus.dto';

@Injectable()
export class KampusService {
  findKampusById(id: number) { }

  create(createKampusDto: CreateKampusDto) {
    return 'This action adds a new kampus';
  }

  findAll() {
    return `This action returns all kampus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} kampus`;
  }

  update(id: number, updateKampusDto: UpdateKampusDto) {
    return `This action updates a #${id} kampus`;
  }

  remove(id: number) {
    return `This action removes a #${id} kampus`;
  }
}
