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

  return (
    <SectionContainer>
      <Logo />
      <AboutSection>
        Play with other people in your area!
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
                  axios.post('/email', {
                    email,
                    subject: 'Sign me up email',
                    message: 'Sign me up email',
                    name: '',
                  })
                  setSuccess(true)
                  setError(false)
                  setShowSubmitButton(false)
                } else setError(true)
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
      </GetInvolved>
      <Error>{error && 'Please make sure the email format is correct'}</Error>
      {error &&
        axios.post('/email', {
          email,
          subject: 'Error on Sign me up email',
          message: error,
          name: '',
        })}
    </SectionContainer>
  )
}

export default About
