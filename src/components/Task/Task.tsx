import React from 'react'
import { TaskContainer, ActivedCheck, TaskText, TrashButton, TrashIcon, UnactiveCheckButton, UnactiveCheckIcon } from './Task.styles'
import { TaskDTO } from '@storage/DTOs'
import { useTheme } from 'styled-components/native'
import { finallyTask } from '@storage/Tasks/FinallyTask.service'
import { Alert } from 'react-native'
import { AppError } from '@utils/AppError'
import { deleteTask } from '@storage/Tasks/DeleteTask.service'

interface TaskProps extends TaskDTO {
  onRefresh: () => void
}

export const Task = ({id, isdone, text, onRefresh}:TaskProps) => {
  const theme = useTheme()

  const HandleFinallyTask = async () => {
    try {
      await finallyTask(`${id}`)
       Alert.alert('Sucesso', 'Menos uma tarefa para fazer')
       onRefresh()
       
     
    } catch (error) {
     if (error instanceof AppError) {
       Alert.alert('Erro', error.message)
     }else {
       Alert.alert('Erro', 'Não foi possivel finalizar a tarefa')
     }
    }
  }

   const deleteTaskSelected = async () => {
    try {
      await deleteTask(`${id}`)
       Alert.alert('Sucesso', 'Tarefa deletada com sucesso')
       onRefresh()
       
     
    } catch (error) {
     if (error instanceof AppError) {
       Alert.alert('Erro', error.message)
     }else {
       Alert.alert('Erro', 'Não foi possivel deletar a tarefa')
     }
    }
  }

  const handleDeleteTask = () => {
    Alert.alert('Deletar', 'Deseja realmente deletar a tarefa?', [
      { text: 'Não', style: 'cancel'},
      { text: 'Sim', onPress: () => deleteTaskSelected()}
    ])
  }
  return (
    <TaskContainer>
      {isdone ? <ActivedCheck /> : (
        <UnactiveCheckButton onPress={HandleFinallyTask} >          
          <UnactiveCheckIcon />
        </UnactiveCheckButton>
      )}
      <TaskText style={{
        textDecorationLine: isdone ? 'line-through' : 'none',
        color: isdone ? theme.colors.gray_300 : theme.colors.gray_100
      }}>
       {text}
      </TaskText>
      <TrashButton onPress={handleDeleteTask} >
        <TrashIcon />
      </TrashButton>

    </TaskContainer>
  )
}
