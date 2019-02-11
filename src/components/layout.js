import React from 'react'
import GlobalStyle from '../theme/global'
import BodyContainer from '../theme/containers/BodyContainer'
import NavigationMenu from '../components/NavigationMenu'
import MainContainer from '../theme/containers/MainContainer'
import Footer from '../components/Footer'

export default ({ children }) => (
  <>
    <GlobalStyle />
    <BodyContainer>
      <NavigationMenu />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </BodyContainer>
  </>
)
