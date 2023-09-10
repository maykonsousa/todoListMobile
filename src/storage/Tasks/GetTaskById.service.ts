import { TaskDTO } from "@storage/DTOs";
import { getAllTasks } from "./GetAllTasks.service";
import { AppError } from "@utils/AppError";

export const getTaskById = async (id: string):Promise<TaskDTO> => {
   try {
    const tasks = await getAllTasks();
    const task = tasks.find((task) => task.id === id);
    if(!task) {
       

        throw new AppError("Task não encontrada", 404);
    }
    console.log("task", task);
    return task;
   } catch (error) {
         console.log("Falha no servico de pegar task por id");
    throw error;
   }
};