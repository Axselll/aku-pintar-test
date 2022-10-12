import { Module } from '@nestjs/common';
import { PenggunaService } from './pengguna.service';
import { PenggunaController } from './pengguna.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pengguna } from './entities/pengguna.entity';
import { Kampus } from 'src/kampus/entities/kampus.entity';
import { Mengikuti } from './entities/mengikuti.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pengguna, Kampus, Mengikuti])],
  controllers: [PenggunaController],
  providers: [PenggunaService]
})
export class PenggunaModule { }
