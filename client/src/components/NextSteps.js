import React from 'react'
import { SectionContainer } from './elements'
import Button from '@material-ui/core/Button'

import { NavigationButtonItem } from './elements'
import { Prompt } from '../style-guide/typography'
function NextSteps() {
  return (
    <SectionContainer>
      <Prompt>
        PingPongBuddies is only the start! The idea is to create an app where
        people can find other people for any activity they wish: From ping pong
        to playing chess, going to the fleamarket or even co-working in a cafe!
      </Prompt>
      <Prompt>Sounds interesting/wanna get involved?</Prompt>
      <Prompt>Get in touch!</Prompt>
      <Button
        variant='extended'
        style={{ width: '170px', marginLeft: '10px', marginTop: '20px' }}
      >
        <NavigationButtonItem to='/contact'>Contact</NavigationButtonItem>
      </Button>
    </SectionContainer>
  )
}

export default NextSteps
