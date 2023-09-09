import { TaskDTO } from "@storage/DTOs";
import { getAllTasks } from "./GetAllTasks.service";
import { AppError } from "@utils/AppError";

export const getTaskById = async (id: string):Promise<TaskDTO> => {
   try {
    const tasks = await getAllTasks();
    const task = tasks.find((task: TaskDTO) => task.id === id);
    if(!task) {
        throw new AppError("Task não enconstrada", 404);
    }
    return task;
   } catch (error) {
    throw error;
   }
};