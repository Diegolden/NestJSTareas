import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { tarea } from 'src/tarea/Entities/tarea.entity';
import { user } from './Entities/user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports:[TypeOrmModule
    .forFeature([user,tarea])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
