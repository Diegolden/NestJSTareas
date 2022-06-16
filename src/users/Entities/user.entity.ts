import { Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()

export class user {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    nombre: string;
    @Column()
    apellido: string;
    @Column()
    email: string;
    @Column()
    password: string;
}