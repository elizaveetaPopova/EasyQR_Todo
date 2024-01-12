export class CreateTaskDto {
  readonly title: string;
  readonly description: string;
  readonly status: boolean;
}

export class UpdateTaskDto {
  _id?: string;
  title?: string;
  description?: string;
  status?: boolean;
}
