import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFollowDto } from './dto/create-follow.dto';
import { Mengikuti } from './entities/mengikuti.entity';
import { Pengguna } from './entities/pengguna.entity';

@Injectable()
export class PenggunaService {
  constructor(
    @InjectRepository(Pengguna) private penggunaRepository: Repository<Pengguna>,
    @InjectRepository(Mengikuti) private followKampusRepository: Repository<Mengikuti>
  ) { }

  async input(followDto: CreateFollowDto): Promise<Mengikuti> {
    return await this.followKampusRepository.save(followDto);
  }

  // test purposes
  async cariSemuaData(): Promise<Mengikuti[]> {
    return await this.followKampusRepository.find({
      relations: {
        pengguna: true,
        kampus: true
      }
    });
  }

  async cariDataSatuPengguna(id: number): Promise<Pengguna> {
    return await this.penggunaRepository.findOne({
      relations: ['mengikuti.kampus'],
      where: {
        id: id
      }
    })
  }
}
