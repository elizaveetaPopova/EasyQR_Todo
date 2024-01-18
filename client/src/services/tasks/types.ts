export interface ITaskResponse {
  _id: string;
  title: string;
  status: boolean;
}
export interface ITaskRequest {
  title: string;
  status: boolean;
}
