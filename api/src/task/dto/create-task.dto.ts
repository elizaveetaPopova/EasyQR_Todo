export class CreateTaskDto {
  readonly title: string;
  readonly status: boolean;
}

export class UpdateTaskDto {
  _id?: string;
  title?: string;
  status?: boolean;
}
