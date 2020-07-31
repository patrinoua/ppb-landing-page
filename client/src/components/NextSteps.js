import React from 'react'
import { SectionContainer, ScrollFullContainer, Description } from './elements'
import Fab from '@material-ui/core/Fab'

import { NavigationButtonItem } from './elements'

function NextSteps() {
  return (
    <SectionContainer>
      <p>
        PingPongBuddies is only the start! The idea is to create an app where
        people can find other people for any activity they wish: From ping pong
        to playing chess, going to the fleamarket or even co-working in a cafe!
      </p>
      <p>
        This is called... "Buddies" so far! But should be replaced soon by a
        name that reflects energy, freshness, activeness, empowerment to all,
        trust and the feeling of an international friendly community, in
        addition to Logo, Colors and UI.
      </p>
      <p>Sounds interesting/wanna get involved?</p>
      <p>Feel free to get in touch!</p>
      <br />
      <Fab
        variant='extended'
        style={{ width: '170px', marginLeft: '10px', marginTop: '20px' }}
      >
        <NavigationButtonItem to='/contact'>Contact</NavigationButtonItem>
      </Fab>
    </SectionContainer>
  )
}

export default NextSteps
