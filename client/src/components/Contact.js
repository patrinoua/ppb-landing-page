import React, { useState } from 'react'
import '../App.css'
import axios from 'axios'
import validateEmailFormat from '../utils/validateEmailFormat'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Prompt } from '../style-guide/typography'

import {
  SectionContainer,
  // ScrollFullContainer,
  Error,
  Logo,
  Success,
  StyledALink,
} from './elements'

const useStyles = makeStyles((theme) => ({
  root: {
    flexDirection: 'column',
    paddingBottom: '20px',
    height: 'auto',
    minHeight: '200px',
    minWidth: '280px',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '23ch',
    maxWidth: '90%',
  },
}))

function Contact() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  const [showSubmitButton, setShowSubmitButton] = useState(true)
  const classes = useStyles()

  return (
    <SectionContainer>
      <Logo />
      {/* <ScrollFullContainer> */}
      <Error>
        {error &&
          'Please make sure the email format is correct and all the fields are filled'}
      </Error>
      <div className={classes.root}>
        <TextField
          label='Message *'
          onChange={(e) => setMessage(e.target.value)}
          id='outlined-margin-none'
          defaultValue=''
          className={classes.textField}
          variant='outlined'
          margin='dense'
          multiline
          rows={4}
        />
        <br />
        <TextField
          label='Name *'
          onChange={(e) => setName(e.target.value)}
          id='outlined-margin-dense'
          defaultValue=''
          className={classes.textField}
          variant='outlined'
          margin='dense'
        />
        <br />
        <TextField
          label='Email *'
          onChange={(e) => setEmail(e.target.value)}
          id='outlined-margin-dense'
          defaultValue=''
          className={classes.textField}
          margin='dense'
          variant='outlined'
        />
      </div>
      {showSubmitButton ? (
        <Button
          style={{
            width: '170px',
          }}
          onClick={() => {
            if (validateEmailFormat(email) && name && message) {
              axios.post('/email', {
                email,
                name,
                message,
                subject: 'Contact me message',
              })
              setSuccess(true)
              setError(false)
              setShowSubmitButton(false)
            } else setError(true)
          }}
        >
          <Prompt to='/contact'>Send</Prompt>
        </Button>
      ) : (
        <Success>
          {success && 'Your message has been sent successfuly! 🤩'}
        </Success>
      )}

      <Prompt> pingpongistas [at] gmail.com</Prompt>
      <Prompt>
        This project is created by{' '}
        <StyledALink href='https://angelikipatrinou.com' target='_blank'>
          Angeliki
        </StyledALink>
      </Prompt>
      {/* </ScrollFullContainer> */}
    </SectionContainer>
  )
}

export default Contact
