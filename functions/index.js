const functions = require('firebase-functions')
const express = require('express')
const nodemailer = require('nodemailer')

const app = express()

app.get('/server/timestamp', (req, res) => {
  res.send(`${Date.now()}`)
})

app.get('/timestamp-cached', (req, res) => {
  res.set('Cache-Control', 'public, max-age=300, s-maxage=600')
  res.send(`${Date.now()}`)
})

app.post('/server/email', (req, res) => {
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: require('./secrets.json').user,
      pass: require('./secrets.json').pass,
    },
  })

  var mailOptions = {
    from: 'pingpongistas@gmail.com',
    to: 'patrinoua@gmail.com',
    subject: req.body.subject,
    text: `
    name: ${req.body.name},
    email: ${req.body.email},
    
    message: 
    ${req.body.message},
      `,
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error)
    } else {
      console.log('Email sent!: ' + info.response)
    }
  })
})

exports.app = functions.https.onRequest(app)
