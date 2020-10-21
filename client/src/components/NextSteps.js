import React from 'react'
import Button from '@material-ui/core/Button'

import { SContainer, NavigationButtonItem } from './elements'
import { Prompt } from '../style-guide/typography'
function NextSteps() {
  return (
    <SContainer>
      <Prompt>PingPongBuddies is only the beginning! </Prompt>
      <Prompt>
        The idea is to create an app to meet people for any activity!
      </Prompt>
      <Prompt>
        From tennis to chess, going to the fleamarket or co-working in a cafe!
      </Prompt>
      <Prompt>Sounds interesting/wanna get involved?</Prompt>
      <Prompt>Get in touch:</Prompt>
      <Button
        variant='extended'
        style={{ width: '170px', marginLeft: '10px', marginTop: '20px' }}
      >
        <NavigationButtonItem to='/contact'>Contact</NavigationButtonItem>
      </Button>
    </SContainer>
  )
}

export default NextSteps
