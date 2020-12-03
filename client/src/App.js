import React from 'react'
import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'
import styled from 'styled-components'
import About from './components/About'
import Screenshots from './components/Screenshots'
import NextSteps from './components/NextSteps'
import Contact from './components/Contact'
import Policy from './components/Policy'
import DeleteAccount from './components/DeleteAccount'
import NavigationBar from './components/NavigationBar'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 90vh;
  margin-top: 70px;
  font-size: 18px;
  padding: 20px;
  box-sizing: border-box;
  @media (max-width: 750px) {
    font-size: 14px;
    margin-top: 40px;
  }
`
function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Container>
        <Route exact path='/' render={() => <About />} />
        <Route exact path='/screenshots' render={() => <Screenshots />} />
        <Route exact path='/nextsteps' render={() => <NextSteps />} />
        <Route exact path='/contact' render={() => <Contact />} />
        <Route exact path='/policy' render={() => <Policy />} />
        <Route exact path='/deleteAccount' render={() => <DeleteAccount />} />
      </Container>
    </BrowserRouter>
  )
}

export default App
