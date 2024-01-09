import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ITask } from './interfaces/user.interface';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TaskService {
  constructor(@InjectModel('Task') private readonly taskModel: Model<ITask>) {}

  async create(createTaskDto: CreateTaskDto): Promise<ITask> {
    const createdTask = new this.taskModel(createTaskDto);
    return createdTask.save();
  }

  async findAll(): Promise<ITask[]> {
    return this.taskModel.find().exec();
  }

  async findOne(id: string): Promise<ITask> {
    return this.taskModel.findById(id);
  }

  async deleteOne(id: string): Promise<ITask> {
    return this.taskModel.findByIdAndDelete(id);
  }
}
