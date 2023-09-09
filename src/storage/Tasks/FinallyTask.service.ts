import { TASK_COLLECTION } from "@storage/collections";
import { getTaskById } from "./GetTaskById.service";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAllTasks } from "./GetAllTasks.service";
import { AppError } from "@utils/AppError";

export const finallyTask = async (id:string) => {
    try {
        const allTasks = await getAllTasks();
    const task = getTaskById(id);
    if(!task) {
        throw new AppError("task não encontrada", 404);
    }
    const taksUpdated = allTasks.map((task) => {
        if(task.id === id) {
            task.isdone = true;
        }
        return task;
    });

    await AsyncStorage.setItem(TASK_COLLECTION, JSON.stringify(taksUpdated));
    } catch (error) {
        throw error;
    }

    
};