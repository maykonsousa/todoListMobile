import React from 'react'
import { TaskContainer, ActivedCheck, TaskText, TrashButton, TrashIcon, UnactiveCheckButton, UnactiveCheckIcon } from './Task.styles'
import { TaskDTO } from '@storage/DTOs'
import { useTheme } from 'styled-components/native'

export const Task = ({id, isdone, text}:TaskDTO) => {
  const theme = useTheme()
  return (
    <TaskContainer>
      {isdone ? <ActivedCheck /> : <UnactiveCheckButton><UnactiveCheckIcon /></UnactiveCheckButton>}
      <TaskText style={{
        textDecorationLine: isdone ? 'line-through' : 'none',
        color: isdone ? theme.colors.gray_300 : theme.colors.gray_100
      }}>
       {text}
      </TaskText>
      <TrashButton>
        <TrashIcon />
      </TrashButton>

    </TaskContainer>
  )
}
