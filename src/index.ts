import express, { Application, Request, Response } from "express";
import "dotenv/config";
import Task, { ITask } from "./models/task";
import { IApiResponse } from "./types/common";
import connectDb from "./db/config";

const app: Application = express();
app.use(express.json());
const port = process.env.PORT;

app.get("/", (req: Request, res: Response): void => {
  try {
    res.status(200).send("Hello TS");
  } catch (error) {
    res.status(500).json({ message: "Internal error" });
  }
});

app.post(
  "/createTask",
  async (
    req: Request<{}, {}, ITask>,
    res: Response<IApiResponse>
  ): Promise<void> => {
    try {
      const { title, description } = req.body;
      if (!title || !description) {
        res
          .status(400)
          .json({ success: false, message: "All fields are required" });
        return;
      }
      const task: ITask = {
        title,
        description,
      };

      await Task.create(task);
      res.status(200).json({
        success: true,
        message: "task created",
        data: task,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: "Internal error" });
    }
  }
);

connectDb();

app.listen(port, () => {
  console.log(`Server running in ${port}`);
});
