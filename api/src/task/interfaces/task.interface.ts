import { Document } from 'mongoose';

export interface ITask extends Document {
  readonly title: string;
  readonly description: string;
  readonly status: boolean;
}

export interface IUpdatedTask extends Document {
  readonly title?: string;
  readonly description?: string;
  readonly status?: boolean;
}
