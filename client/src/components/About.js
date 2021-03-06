import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import TextField from '@material-ui/core/TextField'
import axios from 'axios'
import validateEmailFormat from '../utils/validateEmailFormat'
import {
  Logo,
  SContainer,
  Error,
  Success,
  GetInvolved,
  AboutSection,
  AvailableOn,
} from './elements'
import { H1, Prompt } from '../style-guide/typography'

function About() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  const [showSubmitButton, setShowSubmitButton] = useState(true)

  const sendSignUpMail = () => {
    axios.post('/server/email', {
      email,
      name,
      subject: 'Sign me up!',
      message: 'Sign me up email',
    })
  }
  const sendErrorMail = () => {
    axios.post('/email', {
      email,
      subject: 'Error on Sign me up email',
      message: error,
      name: '',
    })
  }
  return (
    <SContainer>
      <Logo />
      <AboutSection>
        <Prompt>Play with other people in your area!</Prompt>
        <H1>Available on</H1>
        <a
          href='https://play.google.com/store/apps/details?id=com.patrinoua.PingPongBuddies'
          target='_blank'
        >
          <AvailableOn />
        </a>
        <br />
        <br />
        <Prompt>Leave your email below to get latest updates!</Prompt>
      </AboutSection>
      <GetInvolved>
        <FormControl fullWidth>
          <TextField
            style={{ fontFamily: 'Open Sans' }}
            id='email'
            label='E-mail'
            onChange={(e) => {
              setEmail(e.target.value)
              setError(false)
            }}
            autoCapitalize='none'
          />
          <FormHelperText
            id='my-helper-text'
            style={{ fontFamily: 'Open Sans' }}
          >
            We'll never share your email.
          </FormHelperText>
          <TextField
            style={{ fontFamily: 'Open Sans' }}
            id='name'
            label='Name (Optional)'
            onChange={(e) => setName(e.target.value)}
          />
          <div
            style={{
              height: '60px',
              display: 'flex',
              justifyContent: 'flexStart',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            {showSubmitButton ? (
              <Button
                style={{
                  marginTop: '10px',
                  marginBottom: '10px',
                }}
                onClick={() => {
                  if (validateEmailFormat(email.trim())) {
                    sendSignUpMail()
                    setSuccess(true)
                    setShowSubmitButton(false)
                    setError(false)
                  } else {
                    setError(true)
                    sendErrorMail()
                  }
                }}
              >
                <Prompt>OK! Keep me posted</Prompt>
              </Button>
            ) : (
              <Success style={{ marginTop: '20px' }}>
                {success && 'Your email has been submitted successfuly! 🤩'}
              </Success>
            )}
            {error ? (
              <Error>
                {error && 'Please make sure the email format is correct'}
              </Error>
            ) : (
              ''
            )}
          </div>
        </FormControl>
      </GetInvolved>
    </SContainer>
  )
}

export default About
