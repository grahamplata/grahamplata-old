import React from 'react'
import HeaderContainer from '../theme/containers/HeaderContainer'

export default ({ title, subtitle }) => (
  <HeaderContainer>
    <div>
      <h3>{title}</h3>
      <sub>{subtitle}</sub>
    </div>
  </HeaderContainer>
)
