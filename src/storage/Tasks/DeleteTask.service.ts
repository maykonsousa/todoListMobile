import { TASK_COLLECTION } from "@storage/collections";
import { getAllTasks } from "./GetAllTasks.service";
import { getTaskById } from "./GetTaskById.service";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const deleteTask = async (id:string) => {
    try {
    await getTaskById(id);
    const tasks = await getAllTasks();
    const tasksUpdated = tasks.filter((task) => task.id !== id);
    await AsyncStorage.setItem(TASK_COLLECTION, JSON.stringify(tasksUpdated));
    } catch (error) {
        throw error;
    }
};