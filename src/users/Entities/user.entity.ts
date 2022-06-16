import { tarea } from "src/tarea/Entities/tarea.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, Any} from "typeorm";

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
    //hacemos la relacion de uno a muchos
    @OneToMany(()=>tarea,tarea=>tarea.user)
    tareas:tarea[]
}
