import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateHomeworkDTO } from './DTO/create-homework';
import { tarea } from './Entities/tarea.entity';

@Injectable()
export class TareaService {
    constructor(@InjectRepository(tarea)private tarea:Repository<tarea>){
    
    }
    async getAllTareas(){
        return await this.tarea.find();
    }
    async createTarea(tareaNueva:CreateHomeworkDTO){
        const newTarea = new tarea();
        newTarea.descripcion = tareaNueva.descripcion;
        newTarea.fecha = tareaNueva.fecha;
        newTarea.nombre = tareaNueva.nombre;
        newTarea.tipo= tareaNueva.tipo;

        return this.tarea.save(newTarea);

    }

    async findTarea(id:number){
        return await this.tarea.findOne(id);
    }

    async updateTarea(tareaEditada:CreateHomeworkDTO,id:any){

        const updateTarea = await this.tarea.findOne(id)
        updateTarea.descripcion = tareaEditada.descripcion;
        updateTarea.fecha = tareaEditada.fecha;
        updateTarea.tipo = tareaEditada.tipo;
        updateTarea.nombre = tareaEditada.nombre;

        return this.tarea.save(updateTarea)


    }

    async deleteTarea(){

        return this.tarea.delete

    }
    
}


