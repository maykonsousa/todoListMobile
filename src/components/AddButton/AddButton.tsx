import React from 'react'
import { AddButtonContainer, AddButtonIcon } from './AddButton.styles'
import { TouchableOpacityProps } from 'react-native'

interface AddButtonProps extends TouchableOpacityProps {}

export const AddButton = ({...rest}:AddButtonProps) => {
  return (
    <AddButtonContainer {...rest}>
        <AddButtonIcon />
    </AddButtonContainer>
  )
}
