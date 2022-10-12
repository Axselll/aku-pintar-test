import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { DetailJurusan } from "./detail_jurusan.entity";

@Entity()
export class Jurusan {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nama: string

    @OneToMany(() => DetailJurusan, detailJurusan => detailJurusan.jurusan)
    memiliki: DetailJurusan[]
}