import React, { useState } from 'react'
import { InputContainer, InputProps} from './Input.styles'




export const Input = ({inputRef, ...rest}:InputProps) => {
  const [isFocused, setIsFocused] = useState(false)
  return (
    <InputContainer 
      isFocused={isFocused}
      ref={inputRef}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      {...rest}
    />
  )
}
