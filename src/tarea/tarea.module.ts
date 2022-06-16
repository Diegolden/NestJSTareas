import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { user } from 'src/users/Entities/user.entity';
import { tarea } from './Entities/tarea.entity';
import { TareaController } from './tarea.controller';
import { TareaService } from './tarea.service';

@Module({
  imports:[TypeOrmModule.forFeature([tarea,user])],
  controllers: [TareaController],
  providers: [TareaService]
})
export class TareaModule {}
