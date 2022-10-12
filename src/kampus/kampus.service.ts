import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Kampus } from './entities/kampus.entity';

@Injectable()
export class KampusService {
  constructor(@InjectRepository(Kampus) private kampusRepository: Repository<Kampus>) { }

  findKampusById(id: number): Promise<Kampus> {
    return this.kampusRepository.findOneBy({ id })
  }
}
