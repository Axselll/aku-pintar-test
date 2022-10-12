import { Module } from '@nestjs/common';
import { KampusService } from './kampus.service';
import { KampusController } from './kampus.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Kampus } from './entities/kampus.entity';
import { Fakultas } from './entities/fakultas.entity';
import { Jurusan } from './entities/jurusan.entity';
import { Mengikuti } from 'src/pengguna/entities/mengikuti.entity';
import { Pengguna } from 'src/pengguna/entities/pengguna.entity';
import { DetailJurusan } from './entities/detail_jurusan.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pengguna, Mengikuti, Kampus, Fakultas, Jurusan, DetailJurusan])],
  controllers: [KampusController],
  providers: [KampusService]
})
export class KampusModule { }
