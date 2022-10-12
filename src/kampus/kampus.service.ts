import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getManager, Repository } from 'typeorm';
import { DetailJurusan } from './entities/detail_jurusan.entity';
import { Fakultas } from './entities/fakultas.entity';
import { Jurusan } from './entities/jurusan.entity';
import { Kampus } from './entities/kampus.entity';

@Injectable()
export class KampusService {
  constructor(
    @InjectRepository(Kampus) private kampusRepository: Repository<Kampus>,
    @InjectRepository(DetailJurusan) private detaiJurusanRepository: Repository<DetailJurusan>,
  ) { }

  findKampusById(id: number): Promise<Kampus> {
    return this.kampusRepository.findOneBy({ id })
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
