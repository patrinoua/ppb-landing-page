import React, { useState } from 'react'
import '../App.css'
import axios from 'axios'
import validateEmailFormat from '../utils/validateEmailFormat'
import { makeStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Prompt } from '../style-guide/typography'

import {
  SContainer,
  // ScrollFullContainer,
  Error,
  Logo,
  Success,
  StyledALink,
} from './elements'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    minHeight: '270px',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    minHeight: '40px',
    width: '23ch',
    minWidth: '280px',
    maxWidth: '90%',
  },
  button: {
    minHeight: 50,
    width: 170,
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
 
  axios
    .get('/hi')
    .then()
    .catch((err) => console.log('errr', error))
  return (
    <SContainer>
      <Logo />
      {/* <ScrollFullContainer> */}
      <FormControl fullWidth className={classes.root}>
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
      </FormControl>
      {showSubmitButton ? (
        <Button
          className={classes.button}
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
      {error && (
        <Error>
          Please make sure the email format is correct and all the fields are
          filled
        </Error>
      )}
      <br />
      <Prompt> pingpongistas [at] gmail.com</Prompt>
      <br />
      <Prompt>
        This project is created by{' '}
        <StyledALink href='https://angelikipatrinou.com' target='_blank'>
          Angeliki
        </StyledALink>
      </Prompt>
      <br />
      <br />.{/* </ScrollFullContainer> */}
    </SContainer>
  )
}

export default Contact
