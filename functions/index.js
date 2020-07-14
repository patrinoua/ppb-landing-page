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
    email: req.body.email,
    text: req.body.message,
    name: req.body.name,
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
