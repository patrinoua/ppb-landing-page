const functions = require('firebase-functions')
const express = require('express')
const nodemailer = require('nodemailer')

const app = express()

app.get('/timestamp', (req, res) => {
  res.send(`${Date.now()}`)
})
app.get('/timestamp-cached', (req, res) => {
  res.set('Cache-Control', 'public, max-age=300, s-maxage=600')
  res.send(`${Date.now()}`)
})
app.post('/email', (req, res) => {
  // console.log('email?', req.body.email)
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
    subject: 'PingPongBuddies-email',
    text: req.body.email,
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error)
    } else {
      console.log('Email sent!: ' + info.response)
    }
  })
  // res.send({ reports })
})

exports.app = functions.https.onRequest(app)
