import React from 'react'
import HeaderContainer from '../theme/containers/HeaderContainer'

export default ({ title, subtitle }) => (
  <HeaderContainer>
    <h3>{title}</h3>
    <small>{subtitle}</small>
  </HeaderContainer>
)
