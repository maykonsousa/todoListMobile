import { TASK_COLLECTION } from "@storage/collections";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TaskDTO } from "@storage/DTOs";

export const getAllTasks = async ():Promise<TaskDTO[]> => {
    try {
        const storage = await AsyncStorage.getItem(TASK_COLLECTION);
        const tasks:TaskDTO[] = storage ? JSON.parse(storage) : [];
        const sortTasks = tasks.sort((a:TaskDTO, b:TaskDTO) => {
            if(a.isdone && !b.isdone) {
                return 1;
            }
            if(!a.isdone && b.isdone) {
                return -1;
            }
            return 0;
        }) as TaskDTO[];

       return sortTasks;
    } catch (error) {
        console.log("Falha no servico de pegar todas as tasks");
        throw error;
    }
};