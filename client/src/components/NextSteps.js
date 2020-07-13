import React from 'react'
import styled from 'styled-components'
import {
  SectionContainer,
  UnlimitedHeightSection,
  Description,
} from './elements'

const TextContainer = styled.div`
  max-width: 600px;
`
function NextSteps() {
  return (
    <SectionContainer>
      <UnlimitedHeightSection>
        <h3>Step 1</h3> Finish the development of PingPongBuddies.
        <br />
        <h3>Step 2</h3>
        Once pingpongbuddies is out there will be another app where users choose
        between a range of activities:
        <h1>Buddies</h1>
        <p>
          This is so far called "Buddies". A brand that reflects energy,
          freshness, activeness, community, trust and security should be
          developed before the app launches.
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
      </UnlimitedHeightSection>
    </SectionContainer>
  )
}

export default NextSteps
