import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Mengikuti } from "./mengikuti.entity";

@Entity()
export class Pengguna {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nama_lengkap: string

    @Column()
    email: string

    @Column({ type: "timestamp" })
    created_at: Date

    @OneToMany(() => Mengikuti, mengikuti => mengikuti.pengguna)
    mengikuti: Mengikuti[]
}
