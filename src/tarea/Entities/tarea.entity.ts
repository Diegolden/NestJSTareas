import { user } from "src/users/Entities/user.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne} from "typeorm";

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
    //hacemos la relacion de muchos a uno
    @ManyToOne(()=>user,user=>user.tareas)
    user:user
}