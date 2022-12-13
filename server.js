const express = require('express')
const cors = require('cors')
require('dotenv').config()
require('./config/database')
const router = require('./routes/index')

const app = express()
app.use(express.json())
app.use(cors())
app.use('/api', router)


  // app.use(express.static('frontend/build'))
  
  // app.get('*', (req, res) => {
  
  // res.sendFile(path.join(__dirname + '/frontend/build/index.html'))
  
  //   })
  
  

const port = 5000

app.listen(port, '0.0.0.0',() => console.log('Listening on port 4000'))