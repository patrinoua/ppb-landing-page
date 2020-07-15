import React from 'react'
import { SectionContainer, ScrollFullContainer, Description } from './elements'
import Fab from '@material-ui/core/Fab'

import { NavigationButtonItem } from './elements'

function NextSteps() {
  return (
    <SectionContainer>
      <p>
        PingPongBuddies is only the start! The broader vision is to create an
        app where people can find other people for any activity they wish: From
        ping pong to playing chess, going to the fleamarket or even co-working
        in a cafe!
      </p>
      <h2>Timeline</h2>
      1. Finish the development of PingPongBuddies.
      <br />
      2. Develop the app further to offer a wide variety of activities:
      <h1>Buddies</h1>
      <p>
        So far, it is called "Buddies". A brand that reflects energy, freshness,
        activeness, empowerment to all, trust and the feeling of an
        international friendly community is on its way, including
      </p>
      <ul>
        <li>Brand Name</li>
        <li>Logo</li>
        <li>Colors</li>
        <li>UI</li>
      </ul>
      <p>Therefore I am currently looking for creative partners!</p>
      <p>Sounds interesting/wanna get involved?</p>
      <p>
        Write me a message with wether you want to be a creative cofounder or
        want to contribute as a freelancer. Don't forget to include your
        Portfolio with samples of work and rates. Looking forward to hearing
        from you!
      </p>
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
