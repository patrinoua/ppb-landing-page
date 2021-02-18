import React from 'react'
// import Template from './Template'
import * as Typography from '../style-guide/typography'
import '../App.css'

function Policy() {
  return (
    <div style={{ margin: '50px', maxWidth: '550px' }}>
      <Typography.H1>PingPongBuddies user agreement</Typography.H1>
      This agreement is designed to ensure every user has a safe and enjoyable
      experience. Failure to adhere may result in having your account removed
      from our platform.
      <br />
      <Typography.H2>Respect everyone</Typography.H2>
      We are a very diverse community and we like it! <br />
      This means you also respect other people’s beliefs, interests and
      property.
      <br />
      PingPongBuddies takes a strong stance against hate speech, rude or abusive
      behaviour, and any form of bullying. Additionally we encourage all of our
      users to report anyone who does not follow this behavioural agreement. As
      a community rooted in kindness and respect, we expect all of our users to
      respect each other, themselves, and the PingPongBuddies staff.
      <Typography.H2>Upload your photos only</Typography.H2>We take copyrights
      seriously!
      <br /> If you don’t own the rights to a photo or video, please don’t post
      it. <br />
      <Typography.H2>Send cool messages to other users</Typography.H2>
      Be creative and interesting in what you write. Read other peoples
      profiles, before sending a message. This will also help in engaging in
      interesting conversations and having a great real life meeting.
      <Typography.H2>Don’t pretend you’re someone you’re not</Typography.H2>
      This is plain creepy! Do not post photos that are not of you.
      <Typography.H2>PingPongBuddies photo agreement:</Typography.H2>
      <ul>
        <li> Face must be clearly visible in all photos.</li>
        <li> No kids.</li>
        <li> No shirtless/underwear mirror selfies.</li>
        <li> No pornographic material.</li>
      </ul>
      <Typography.H2>
        Don’t even think about doing anything illegal!
      </Typography.H2>
      Illegal activity will not be tolerated on PingPongBuddies. This may result
      in being banned and/or being reported to the authorities. PingPongBuddies
      isn’t for selling things. If you try to use it as a marketplace, you’ll be
      banned. You have to be 18+ years to use this app, If you don’t follow
      these agreement, you may get a warning or directly have your account
      removed. This agreement is designed to make PingPongBuddies a friendly and
      safe place for all.
    </div>
  )
}

export default Policy
