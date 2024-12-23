import { Schema, model } from "mongoose";

export interface ITask {
  title: string;
  description: string;
}

const taskSchema = new Schema<ITask>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Task = model("Task", taskSchema);
export default Task;
