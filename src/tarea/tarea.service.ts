import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { user } from 'src/users/Entities/user.entity';
import { Repository } from 'typeorm';
import { CreateHomeworkDTO } from './DTO/create-homework';
import { tarea } from './Entities/tarea.entity';
import { updateHomeworkDTO } from './updatetareaDTO/update-homerwork';

@Injectable()
export class TareaService {
    constructor(@InjectRepository(tarea)private tarea:Repository<tarea>
    ,@InjectRepository(user)private user:Repository<user>)
    {
    }
    
    async getAllTareas(){
        return await this.tarea.find({relations:['user']});
    }
    
    async createTarea(tareaNueva:CreateHomeworkDTO){
        const user = await this.user.findOne(
            {
                id:tareaNueva.userId,
            }
        )
        const newTarea = new tarea();
        newTarea.descripcion = tareaNueva.descripcion;
        newTarea.fecha = tareaNueva.fecha;
        newTarea.nombre = tareaNueva.nombre;
        newTarea.tipo= tareaNueva.tipo;
        newTarea.user = user;


        return this.tarea.save(newTarea);

    }

    async findTarea(id:any){
        return await this.tarea.findOne({relations:['user'],where:{"id":id}});
    }

    //cambiamos create por update DTO 
    async updateTarea(tareaEditada:updateHomeworkDTO,id:any){

        const updateTarea = await this.tarea.findOne(id)
        updateTarea.descripcion = tareaEditada.descripcion;
        updateTarea.fecha = tareaEditada.fecha;
        updateTarea.tipo = tareaEditada.tipo;
        updateTarea.nombre = tareaEditada.nombre;

        return this.tarea.save(updateTarea)


    }

    async deleteTarea(id:any){

        return await this.tarea.delete(id);

    }
    
}


