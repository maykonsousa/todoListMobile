import React from 'react'
import { LoadingContainer, LoaingIndicator } from './Loading.styles'

interface LoadingProps {
  size?: number | 'small' | 'large'
}

export const Loading = ({size}:LoadingProps) => {
  return (
    <LoadingContainer>
      <LoaingIndicator size={size ?? 'large'} />
    </LoadingContainer>
  )
}