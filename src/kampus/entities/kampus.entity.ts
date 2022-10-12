import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Akreditasi } from "helper/akreditasi";
import { Mengikuti } from "src/pengguna/entities/mengikuti.entity";
import { DetailJurusan } from "./detail_jurusan.entity";

export enum StatusKampus {
    PTN = "PTN",
    PTS = "PTS",
    PTN_BLU = "PTN-BLU",
    PTN_BH = "PTN_BH",
}

export enum JenisKampus {
    Negeri = "Negeri",
    Swasta = "Swasta",
    Kedinasan = "Kedinasan",
}

@Entity()
export class Kampus {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nama: string

    @Column({
        type: "enum",
        enum: JenisKampus,
    })
    jenis: JenisKampus

    @Column({
        type: "enum",
        enum: StatusKampus,
    })
    status: StatusKampus

    @Column({
        type: "enum",
        enum: Akreditasi,
    })
    akreditasi: Akreditasi

    @Column()
    alamat: string

    @Column()
    no_telp: number

    @Column()
    no_fax: number

    @OneToMany(() => Mengikuti, diikuti => diikuti.kampus)
    diikuti: Mengikuti[]

    @OneToMany(() => DetailJurusan, detailjurusan => detailjurusan.kampus)
    memiliki: DetailJurusan[]
}
