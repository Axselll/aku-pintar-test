import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PenggunaModule } from './pengguna/pengguna.module';
import { KampusModule } from './kampus/kampus.module';
import { Pengguna } from './pengguna/entities/pengguna.entity';
import { Kampus } from './kampus/entities/kampus.entity';
import { Fakultas } from './kampus/entities/fakultas.entity';
import { Jurusan } from './kampus/entities/jurusan.entity';
import { DetailJurusan } from './kampus/entities/detail_jurusan.entity';
import { Mengikuti } from './pengguna/entities/mengikuti.entity';


@Module({
  imports: [
    PenggunaModule,
    KampusModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: null,
      database: 'personal_exp',
      entities: [Pengguna, Kampus, Fakultas, Jurusan],
      autoLoadEntities: true,

      // for test only
      synchronize: true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
