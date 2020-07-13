import React, { useState } from 'react'
import '../App.css'
import styled from 'styled-components'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import axios from 'axios'
import validateEmailFormat from '../utils/validateEmailFormat'
import {
  SectionContainer,
  Logo,
  Description,
  Error,
  Success,
  GetInvolved,
} from './elements'

function Welcome() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  const [showSubmitButton, setShowSubmitButton] = useState(true)

  return (
    <SectionContainer>
      <Logo src='pingpongbudsLogo1.png' />
      <Description>
        PingPongBuddies is a mobile application that connects people who want to
        play ping pong!
        <br />
        <br />
        ✓ One on one interactions
        <br />
        ✓ Distance
        <br />
        ✓ Chat
        <br /> <br />
        Leave your email below and we'll let you know once it's live!
        <br />
        <br />
      </Description>
      <GetInvolved>
        <FormControl fullWidth>
          <InputLabel htmlFor='my-input'>Email address</InputLabel>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            id='my-input'
            aria-describedby='my-helper-text'
            placeholder='E-mail'
            autoCapitalize='none'
          />
          <FormHelperText id='my-helper-text'>
            We'll never share your email.
          </FormHelperText>
          {showSubmitButton ? (
            <Button
              onClick={() => {
                if (validateEmailFormat(email)) {
                  axios.post('/email', { email })
                  setSuccess(true)
                  setError(false)
                  setShowSubmitButton(false)
                } else setError(true)
              }}
            >
              Submit
            </Button>
          ) : (
            <Success>
              {success && 'Your email has been submitted successfuly! 🤩'}
            </Success>
          )}
        </FormControl>
      </GetInvolved>
      <Error>{error && 'Please make sure the email format is correct'}</Error>
    </SectionContainer>
  )
}

export default Welcome
