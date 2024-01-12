import { Document } from 'mongoose';

export interface ITask extends Document {
  readonly title: string;
  readonly description: string;
  readonly status: ITaskStatus;
}

export type ITaskStatus =
  | { status: 0; message: 'not comleted' }
  | { status: 1; message: 'in progress' }
  | { status: 2; message: 'comleted' };
