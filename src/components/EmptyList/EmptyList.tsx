import React from 'react'
import { EmptyListContainer, EmptyListTitle, EmptyListMessage, EmptyListIcon } from './EmptyList.styles'

export const EmptyList = () => {
  return (
    <EmptyListContainer>
        <EmptyListIcon />
        <EmptyListTitle>Você ainda não tem tarefas cadastradas</EmptyListTitle>
        <EmptyListMessage>Crie tarefas e organize seus itens a fazer</EmptyListMessage>
    </EmptyListContainer>
  )
}
