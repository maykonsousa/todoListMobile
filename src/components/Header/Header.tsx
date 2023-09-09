import React from 'react'
import { HeaderContainer, Logo } from './Header.styles'
import logoImage from '../../assets/Logo.png'

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo source={logoImage} />
    </HeaderContainer>
  )
}
