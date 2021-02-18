import React from 'react'
import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'
import styled from 'styled-components'
import About from './components/About'
import Home from './components/Home'
import Screenshots from './components/Screenshots'
import NextSteps from './components/NextSteps'
import Contact from './components/Contact'
import Policy from './components/Policy'
import DeleteAccount from './components/DeleteAccount'
import NavigationBar from './components/NavigationBar'
import Agreement from './components/Agreement'

const Container = styled.div`
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // height: 100vh;
  width: 100vw;
  // margin-top: 70px;
  // font-size: 18px;
  // padding: 20px;
  // box-sizing: border-box;
  // @media (max-width: 750px) {
  //   font-size: 14px;
  //   margin-top: 40px;
  // }
`
function App() {
  return (
    <BrowserRouter>
      {/* <NavigationBar /> */}
      <Container>
        <Route exact path='/' render={() => <Home />} />
        <Route exact path='/about' render={() => <About />} />
        <Route exact path='/screenshots' render={() => <Screenshots />} />
        <Route exact path='/nextsteps' render={() => <NextSteps />} />
        <Route exact path='/contact' render={() => <Contact />} />
        <Route exact path='/policy' render={() => <Policy />} />
        <Route exact path='/deleteAccount' render={() => <DeleteAccount />} />
        <Route exact path='/agreement' render={() => <Agreement />} />
      </Container>
    </BrowserRouter>
  )
}

export default App
