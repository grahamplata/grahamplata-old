import React from 'react'
import GlobalStyle from '../theme/global'
import BodyContainer from '../theme/containers/BodyContainer'
import NavigationMenu from './NavigationMenu'
import MainContainer from '../theme/containers/MainContainer'
import Footer from './Footer'
import DotGrid from '../theme/containers/DotGrid'

export default ({ children }) => (
  <>
    <GlobalStyle />
    <DotGrid>
      <BodyContainer>
        <NavigationMenu />
        <MainContainer>{children}</MainContainer>
        <Footer />
      </BodyContainer>
    </DotGrid>
  </>
)
