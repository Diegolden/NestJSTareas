import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUserDTO } from './DTO/create-users';{}
import { UsersModule } from './users.module';
import { user } from './Entities/user.entity';
import { UsersService } from './users.service';


@Controller('users')
export class UsersController {
    constructor(private usersService:UsersService){}

    @Get()
    getUser(): any {
        return this.usersService.getAllUsers();
        return 'All the homeworks are there';
    }

    @Get(':id')
    getOneUser(@Param('id') id: any):any {
        return this.usersService.findUser(id);

        //return `Only Homework ${id}`; 
    }

    @Post()
    createUser(@Body() homework:CreateUserDTO){
        this.usersService.createUser(homework);
        //return 'Creating Homework';
    }

    @Put(':id')
    UpdateUser(@Param('id') id:any, @Body()updBody:CreateUserDTO){
        return this.usersService.updateUser(updBody,id);

        //return `Updating Homework ${id}`;
    }

    @Delete(':id')
    deleteUser(@Param('id') id: string){

        return this.usersService.deleteTarea(id);
       // return `Deleting Homework ${id}`;
    }







}
