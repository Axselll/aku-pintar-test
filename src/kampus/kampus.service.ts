import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Kampus } from './entities/kampus.entity';

@Injectable()
export class KampusService {
  constructor(
    @InjectRepository(Kampus) private kampusRepository: Repository<Kampus>,
  ) { }

  async findKampusById(id: number): Promise<Kampus> {
    return await this.kampusRepository.findOneBy({ id })
  }

  listJurusan(id: number): Promise<Kampus> {
    try {
      const data = this.kampusRepository.findOne({
        relations: ['memiliki', 'memiliki.fakultas', 'memiliki.jurusan'],
        where: { id: id }
      })
      return data
    } catch (error) {
      throw new Error(error);

    }
  }
}
