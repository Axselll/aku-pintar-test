import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { DetailJurusan } from "./detail_jurusan.entity";

@Entity()
export class Fakultas {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nama: string

    @OneToMany(() => DetailJurusan, detailJurusan => detailJurusan.fakultas)
    memiliki: DetailJurusan[]
}