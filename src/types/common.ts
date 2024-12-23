import { ITask } from "../models/task";

export interface IApiResponse {
  success: boolean;
  message: string;
  data?: ITask | ITask[];
}
