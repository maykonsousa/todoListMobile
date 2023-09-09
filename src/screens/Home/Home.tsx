import React from 'react'
import { FormContainer, HomeContainer, HomeContent } from './Home.styles'
import { Header } from '@components/Header'
import { Input } from '@components/Input'
import { AddButton } from '@components/AddButton'
import { EmptyList } from '@components/EmptyList'
import { Task } from '@components/Task'

export const Home = () => {
  return (
    <HomeContainer>
        <Header />
        <HomeContent>
           <FormContainer>
           <Input placeholder="Adicione uma nova tarefa" />
           <AddButton />
           </FormContainer>
          <Task 
            id="1"
            isdone={false}
            text="Fazer compras"
          />

          <Task 
            id="1"
            isdone={true}
            text="Fazer compras"
          />
        </HomeContent>
    </HomeContainer>
  )
}
