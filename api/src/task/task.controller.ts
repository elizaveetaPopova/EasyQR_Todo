import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { CreateTaskDto, UpdateTaskDto } from './dto/create-task.dto';
import { TaskService } from './task.service';
import { ITask } from './interfaces/task.interface';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post('/create')
  async create(@Body() createTaskDto: CreateTaskDto): Promise<ITask> {
    return this.taskService.create(createTaskDto);
  }

  @Get('/get-tasks')
  async getAllTasks(): Promise<ITask[]> {
    return this.taskService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ITask> {
    return this.taskService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<ITask> {
    return this.taskService.deleteOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() task: UpdateTaskDto,
  ): Promise<ITask> {
    return this.taskService.update(id, task);
  }
}
