import React from 'react'
import { Container, Item, Text } from './elements'

const NavigationBar = () => {
  return (
    <Container>
      <Item to='/'>
        <Text id='about'>About</Text>
      </Item>
      <Item to='/screenshots'>
        <Text>Screenshots</Text>
      </Item>
      <Item to='/nextsteps'>
        <Text>Next Steps</Text>
      </Item>
      <Item to='/contact'>
        <Text>Contact</Text>
      </Item>
    </Container>
  )
}

export default NavigationBar
