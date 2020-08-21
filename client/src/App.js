import React from 'react'
import './App.css'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import About from './components/About'
import Screenshots from './components/Screenshots'
import NextSteps from './components/NextSteps'
import Contact from './components/Contact'
import Policy from './components/Policy'
import { NavigationText } from './style-guide/typography'
import { colors } from './style-guide/colors'

const NavigationBar = styled.div`
  width: 100%;
  position: fixed;
  padding-top: 10px;
  top: 0;
  display: flex;
  justify-content: flex-end;
  height: 50px;
  background: white;
  justify-content: center;
`
const NavigationItem = styled(Link)`
  display: flex;
  justify-content: center;
  width: 100px;
  background: ${colors.charcoal};
  
  padding: 10px;
  padding-bottom: 5px;
  margin: 0 15px;
  text-decoration: none;
  &: hover {
    cursor: pointer;
    background: #08ccaa;
  }
  @media (max-width: 750px) {
    height: 20px;
    width: auto;
    margin: 0;
    font-size: 13px;
    flex-shrink: 0;
  }
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 90vh;
  margin-top: 70px;
  font-size: 18px;
  @media (max-width: 750px) {
    font-size: 14px;
    width: 100%;
    margin-top: 40px;
  }
`
function App() {
  return (
    <BrowserRouter>
      <NavigationBar>
        <NavigationItem to='/'>
          <NavigationText>About</NavigationText>
        </NavigationItem>
        <NavigationItem to='/screenshots'>
          <NavigationText>Screenshots</NavigationText>
        </NavigationItem>
        <NavigationItem to='/nextsteps'>
          <NavigationText>Next Steps</NavigationText>
        </NavigationItem>
        <NavigationItem to='/contact'>
          <NavigationText>Contact</NavigationText>
        </NavigationItem>
      </NavigationBar>
      <Container>
        <Route exact path='/' render={() => <About />} />
        <Route exact path='/screenshots' render={() => <Screenshots />} />
        <Route exact path='/nextsteps' render={() => <NextSteps />} />
        <Route exact path='/contact' render={() => <Contact />} />
        <Route exact path='/policy' render={() => <Policy />} />
      </Container>
    </BrowserRouter>
  )
}

export default App
