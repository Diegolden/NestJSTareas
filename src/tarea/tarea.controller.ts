import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateHomeworkDTO } from './DTO/create-homework';
import { tarea } from './Entities/tarea.entity';
import { TareaService } from './tarea.service';


@Controller('tarea')
export class TareaController {
    constructor(private tareasService:TareaService){}


    @Get()
    getHomeworks(): any {
        return this.tareasService.getAllTareas();
        return 'All the homeworks are there';
    }

    @Get(':id')
    getOneHomework(@Param('id') id: any):any {
        return this.tareasService.findTarea(id);

        //return `Only Homework ${id}`; 
    }

    @Post()
    createHomework(@Body() homework:CreateHomeworkDTO){
        this.tareasService.createTarea(homework);
        //return 'Creating Homework';
    }

    @Put(':id')
    UpdateHomework(@Param('id') id:string, @Body()updBody:CreateHomeworkDTO){
        return `Updating Homework ${id}`;
    }

    @Delete(':id')
    deleteHomework(@Param('id') id:string){
        return `Deleting Homework ${id}`;
    }
    
}
