import { Kampus } from "src/kampus/entities/kampus.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, ManyToOne } from "typeorm";
import { Pengguna } from "./pengguna.entity";

@Entity()
export class Mengikuti {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Pengguna, pengguna => pengguna.mengikuti)
    pengguna: Pengguna

    @ManyToOne(() => Kampus, kampus => kampus.diikuti)
    kampus: Kampus

}
