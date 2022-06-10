import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { tarea } from './Entities/tarea.entity';
import { TareaController } from './tarea.controller';
import { TareaService } from './tarea.service';

@Module({
  imports:[TypeOrmModule.forFeature([tarea])],
  controllers: [TareaController],
  providers: [TareaService]
})
export class TareaModule {}
