import React, { useState } from 'react'
import '../App.css'
import axios from 'axios'
import validateEmailFormat from '../utils/validateEmailFormat'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Fab from '@material-ui/core/Fab'

import {
  SectionContainer,
  ScrollFullContainer,
  Error,
  Logo,
  Success,
  ButtonItem,
  StyledALink,
  TextContainer,
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
      <ScrollFullContainer>
        <TextContainer>
          <div>
            This project is created by{' '}
            <StyledALink href='https://angelikipatrinou.com' target='_blank'>
              Angeliki
            </StyledALink>
          </div>
          <br />
          <div>Get in touch on</div>
          pingpongistas [at] gmail.com
          <br />
          <br />
          <div>Or write a message below</div>
          <br />
        </TextContainer>

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
          <Fab
            style={{ width: '170px', marginLeft: '10px', marginTop: '20px' }}
            variant='extended'
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
            <ButtonItem to='/contact'>Send</ButtonItem>
          </Fab>
        ) : (
          <Success>
            {success && 'Your message has been sent successfuly! 🤩'}
          </Success>
        )}
        <Error>
          {error &&
            'Please make sure the email format is correct and all the fields are filled'}
        </Error>
      </ScrollFullContainer>
    </SectionContainer>
  )
}

export default Contact
