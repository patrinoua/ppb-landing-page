import React from 'react'
import Button from '@material-ui/core/Button'

import { NavigationButtonItem } from './elements'
import { Prompt } from '../style-guide/typography'
function NextSteps() {
  return (
    <div>
      <Prompt>
        PingPongBuddies is only the beginning!
        <br /> The idea is to create an app where people can find other people
        for any activity they wish:
        <br />
        From tennis to chess, going to the fleamarket or co-working in a cafe!
      </Prompt>
      <Prompt>Sounds interesting/wanna get involved?</Prompt>
      <Prompt>Get in touch!</Prompt>
      <Button
        variant='extended'
        style={{ width: '170px', marginLeft: '10px', marginTop: '20px' }}
      >
        <NavigationButtonItem to='/contact'>Contact</NavigationButtonItem>
      </Button>
    </div>
  )
}

export default NextSteps
