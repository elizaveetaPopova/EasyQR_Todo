import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ITask } from './interfaces/task.interface';
import { CreateTaskDto, UpdateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TaskService {
  constructor(@InjectModel('Task') private readonly taskModel: Model<ITask>) {}

  async create(createTaskDto: CreateTaskDto): Promise<ITask> {
    const createdTask = new this.taskModel(createTaskDto);
    return createdTask.save();
  }

  async findAll(): Promise<ITask[]> {
    const tasks = this.taskModel.find().exec();
    if (tasks) {
      return tasks;
    }
  }

  async findOne(id: string): Promise<ITask> {
    const task = this.taskModel.findById(id);
    if (task) {
      return task;
    }
  }

  async deleteOne(id: string): Promise<ITask> {
    const deletedTask = this.taskModel.findByIdAndDelete(id);
    if (deletedTask) {
      return deletedTask;
    }
  }

  async update(id: string, task: UpdateTaskDto): Promise<ITask> {
    const updatedTask = await this.taskModel.findByIdAndUpdate(
      { _id: id },
      task,
      {
        new: true,
      },
    );
    if (updatedTask) {
      return updatedTask;
    }
  }
}
