import { TaskDTO } from '@storage/DTOs'
import React from 'react'
import { ResumeContainer, AllContent, AllLabel, CountBadge, CountBadgeText, DoneContent, DoneLabel } from './Resume.styles';

interface ResumeProps {
    tasks: TaskDTO[]
}

export const Resume = ({tasks}:ResumeProps) => {
    const countAllTasks = tasks?.length;
    const countDoneTasks = tasks?.filter(task => task.isdone).length;
  return (
    <ResumeContainer>
        <AllContent>
            <AllLabel>Criadas</AllLabel>
            <CountBadge>
                <CountBadgeText>{countAllTasks}</CountBadgeText>
            </CountBadge>
        </AllContent>
        <DoneContent>
            <DoneLabel>Finalizadas</DoneLabel>
            <CountBadge>
                <CountBadgeText>{countDoneTasks}</CountBadgeText>
            </CountBadge>
        </DoneContent>
    </ResumeContainer>
  )
}
