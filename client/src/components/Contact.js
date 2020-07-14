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
  Description,
  Error,
  Success,
  GetInvolved,
  StyledALink,
} from './elements'

function Contact() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  const [showSubmitButton, setShowSubmitButton] = useState(true)

  return (
    <SectionContainer>
      <Logo src='pingpongbudsLogo1.png' />
      <Description>
        This project is created by Angeliki Patrinou
        <br />
        <h4>Portfolio Webpage </h4>
        <StyledALink href='https://angelikipatrinou.com' target='_blank'>
          angelikipatrinou.com{' '}
        </StyledALink>
        <br />
        <h4>Get in touch on</h4>patrinoua [at] gmail.com
        <br />
        <h4>Or write a message below</h4>
        <br /> <br />
        Box, send button
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

export default Contact
