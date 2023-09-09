import React, { useState } from 'react'
import { InputContainer, InputProps} from './Input.styles'




export const Input = ({ ...rest}:InputProps) => {
  const [isFocused, setIsFocused] = useState(false)
  return (
    <InputContainer 
      isFocused={isFocused}
      onFocus={() => setIsFocused(true)}
      {...rest}
    />
  )
}
