import React, { useEffect, useRef } from 'react'
import { FormContainer, HomeContainer, HomeContent } from './Home.styles'
import { Header } from '@components/Header'
import { Input } from '@components/Input'
import { AddButton } from '@components/AddButton'
import { EmptyList } from '@components/EmptyList'
import { Task } from '@components/Task'
import { TaskDTO } from '@storage/DTOs'
import { getAllTasks } from '@storage/Tasks/GetAllTasks.service'
import { Alert, TextInput } from 'react-native'
import { FlatList } from 'react-native'
import { createNewTask } from '@storage/Tasks/CreateNewTask.service'
import { AppError } from '@utils/AppError'

export const Home = () => {
  const [tasks, setTasks] = React.useState<TaskDTO[]>([])
  const [taskText, setTaskText] = React.useState('')
  const [isRefetch, setIsRefetch] = React.useState(false)
  const inputRef = useRef<TextInput>(null)

  const FetchAllTasks = async () => {
    try {
      const data = await getAllTasks()
    setTasks(data)
    } catch (error) {
     Alert.alert('Erro', 'Não foi possível carregar as tarefas')
     
      }
      
  
  }

  const handleRefresh = () => {
    setIsRefetch(!isRefetch)
    
  }

  const handleAddTask = async() => {
   try {
     await createNewTask(taskText)
      Alert.alert('Sucesso', 'Tarefa criada com sucesso')
      FetchAllTasks()
      inputRef.current?.blur()
      setTaskText('')
    
   } catch (error) {
    if (error instanceof AppError) {
      Alert.alert('Erro', error.message)
    }else {
      Alert.alert('Erro', 'Não foi possível criar a tarefa')
    }
   }
   }

  useEffect(() => {
    FetchAllTasks()
  }, [isRefetch])

  return (
    <HomeContainer>
        <Header />
        <HomeContent>
           <FormContainer>
           <Input 
            placeholder="Adicione uma nova tarefa"
            value={taskText}
            onChangeText={setTaskText}
            inputRef={inputRef}
            />
           <AddButton
            onPress={handleAddTask}
           />
           </FormContainer>
          <FlatList 
            data={tasks}
            keyExtractor={item => `${item.id}`}
            renderItem={({item}) => (
              <Task 
              id={item.id} 
              isdone={item.isdone}
              text={item.text}
              onRefresh={handleRefresh}
                />
            )}
            ListEmptyComponent={<EmptyList />}
            contentContainerStyle={
              [
                {paddingBottom: 100},
                tasks.length === 0 && {flex: 1, justifyContent: 'center'}
              ]
            }
            showsVerticalScrollIndicator={false}
          />

          
        </HomeContent>
    </HomeContainer>
  )
}
