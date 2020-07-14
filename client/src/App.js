import React from 'react'
import './App.css'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import Welcome from './components/Welcome'
import Screenshots from './components/Screenshots'
import NextSteps from './components/NextSteps'
import Contact from './components/Contact'

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
  width: 110px;
  color: black;
  border-bottom: 2px solid black;
  padding: 10px;
  padding-bottom: 5px;
  margin: 0 15px;
  text-decoration: none;
  font-size: 20px;
  letter-spacing: 0.5px;
  line-height: 1.6;
  &: hover {
    cursor: pointer;
    background: whitesmoke;
  }
  @media (max-width: 750px) {
    height: 20px;
    width: 72px;
    margin: 0 5px;
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
        <NavigationItem to='/welcome'>Welcome</NavigationItem>
        <NavigationItem to='/screenshots'>Screenshots</NavigationItem>
        <NavigationItem to='/nextsteps'>Next Steps</NavigationItem>
        <NavigationItem to='/contact'>Contact</NavigationItem>
      </NavigationBar>
      <Container>
        <Route exact path='/' render={() => <Welcome />} />
        <Route exact path='/welcome' render={() => <Welcome />} />
        <Route exact path='/screenshots' render={() => <Screenshots />} />
        <Route exact path='/nextsteps' render={() => <NextSteps />} />
        <Route exact path='/contact' render={() => <Contact />} />
      </Container>
    </BrowserRouter>
  )
}

export default App
