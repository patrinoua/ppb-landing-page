import React, { useState } from 'react'
import '../App.css'
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
  Error,
  Success,
  GetInvolved,
  AboutSection,
} from './elements'

function About() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  const [showSubmitButton, setShowSubmitButton] = useState(true)

  const sendSignUpMail = () => {
    axios.post('/server/email', {
      email,
      subject: 'Sign me up!',
      message: 'Sign me up email',
      name: '',
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
    <SectionContainer>
      <Logo />
      <AboutSection>
        Play with other people in your area!
        <br />
        <h1>Coming on August 15th! </h1>
        <br />
        Leave your email here to know first when it's live!
        <br />
        <br />
      </AboutSection>
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
              OK! Keep me posted
            </Button>
          ) : (
            <Success>
              {success && 'Your email has been submitted successfuly! 🤩'}
            </Success>
          )}
        </FormControl>
        <Error>{error && 'Please make sure the email format is correct'}</Error>
      </GetInvolved>
    </SectionContainer>
  )
}

export default About
