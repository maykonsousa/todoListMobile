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
import { useTheme } from 'styled-components/native'
import { Resume } from '@components/Resume'

export const Home = () => {
  const [tasks, setTasks] = React.useState<TaskDTO[]>([])
  const [taskText, setTaskText] = React.useState('')
  const [isRefetch, setIsRefetch] = React.useState(false)
  const inputRef = useRef<TextInput>(null)
  const theme = useTheme()

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
    if (taskText.trim() === '') {
      return Alert.alert('Erro', 'Digite uma tarefa')
      
    }

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
           <Resume tasks={tasks} />
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
                tasks.length === 0 && {
                  flex: 1, 
                  justifyContent: 'center',
                  borderTopColor: theme.colors.gray_300,
                  borderTopWidth: 1
                }
              ]
            }
            showsVerticalScrollIndicator={false}
          />

          
        </HomeContent>
    </HomeContainer>
  )
}
