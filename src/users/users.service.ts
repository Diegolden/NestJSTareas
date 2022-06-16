import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDTO } from './DTO/create-users';
import { user } from './Entities/user.entity';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(user)private user:Repository<user>){
    
    }
    async getAllUsers(){
        return await this.user.find();
    }
    async 
    createUser(usuarioNuevo:CreateUserDTO){
        const newUser = new user();
        newUser.nombre = usuarioNuevo.nombre;
        newUser.apellido = usuarioNuevo.apellido;
        newUser.email = usuarioNuevo.email;
        newUser.password= usuarioNuevo.password;

        return this.user.save(newUser);

    }

    async findUser(id:number){
        return await this.user.findOne(id);
    }

    
    async updateUser(usuarioEditado:CreateUserDTO,id:any){

        const updateUser = await this.user.findOne(id)
        updateUser.nombre = usuarioEditado.nombre;
        updateUser.apellido = usuarioEditado.apellido;
        updateUser.email = usuarioEditado.email;
        updateUser.password= usuarioEditado.password;

        return this.user.save(updateUser)


    }

    async deleteTarea(id:any){

        return await this.user.delete(id);

    }









}
