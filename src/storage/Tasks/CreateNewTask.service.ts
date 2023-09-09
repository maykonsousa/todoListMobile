import AsyncStorage from "@react-native-async-storage/async-storage";
import { TaskDTO } from "@storage/DTOs";
import { TASK_COLLECTION } from "@storage/collections";
import { AppError } from "@utils/AppError";
import uuid from "react-native-uuid";
import { getAllTasks } from "./GetAllTasks.service";

export const createNewTask = async (task:string) => {
    try {
        const tasks = await getAllTasks();
        const taskAlreadyExists = tasks.find((taskDTO:TaskDTO)=>taskDTO.text === task);
        if(taskAlreadyExists) {
            throw new AppError("Task already exists", 400);
        }

        const newTask:TaskDTO = {
            id: uuid.v4() as string,
            text: task,
            isdone: false
        }
        const tasksUpdated = [...tasks, newTask];
        await AsyncStorage.setItem(TASK_COLLECTION, JSON.stringify(tasksUpdated));
        

    } catch (error) {
        throw error;
    }
    
};