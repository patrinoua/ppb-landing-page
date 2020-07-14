import React, { useState } from 'react'
import '../App.css'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import axios from 'axios'
import validateEmailFormat from '../utils/validateEmailFormat'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Fab from '@material-ui/core/Fab'

import {
  SectionContainer,
  Logo,
  Description,
  Error,
  Success,
  ButtonItem,
  StyledALink,
} from './elements'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: '20px',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
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
      </Description>

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
          width='130px'
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
          {success && 'Your message has been submitted successfuly! 🤩'}
        </Success>
      )}
      <Error>
        {error &&
          'Please make sure the email format is correct and all the fields are filled'}
      </Error>
    </SectionContainer>
  )
}

export default Contact
