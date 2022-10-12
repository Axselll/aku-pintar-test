import { Akreditasi } from "helper/akreditasi";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Fakultas } from "./fakultas.entity";
import { Jurusan } from "./jurusan.entity";
import { Kampus } from "./kampus.entity";

export enum JenjangStudi {
    D3 = "D3",
    D4 = "D4",
    S1 = "S1",
    S2 = "S2"
}

@Entity()
export class DetailJurusan {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: "enum",
        enum: Akreditasi
    })
    akreditasi: Akreditasi

    @Column({
        type: "enum",
        enum: JenjangStudi
    })
    jenjang: JenjangStudi

    @Column({ type: "float" })
    tingkat_keketatan: Float32Array

    @Column()
    kuota_mhs_baru: number

    @Column()
    url_web: string

    @ManyToOne(() => Kampus, kampus => kampus.memiliki)
    kampus: Kampus

    @ManyToOne(() => Fakultas, fakultas => fakultas.memiliki)
    fakultas: Fakultas

    @ManyToOne(() => Jurusan, jurusan => jurusan.memiliki)
    jurusan: Jurusan
}