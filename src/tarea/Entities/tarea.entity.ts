import { Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()

export class tarea {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    nombre: string;
    @Column()
    descripcion: string;
    @Column()
    fecha: string;
    @Column()
    tipo: number;
}