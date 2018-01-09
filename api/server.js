if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const port = 7000
const express = require('express')
const bodyParse = require('body-parser')
const cors = require('cors')
const authMiddleware = require('./middleware/auth')


const server = express()

server.use([
  bodyParse.json(),
  cors(),
  authMiddleware.initialize,
]
)


// To test whether the server is responding to the url, any none existing url will display the below error
server.get('/', function (req, res) { res.send('Hello World....') })

// Error handler
server.use(function (req, res, next) { res.status(404); res.send("404 - not found"); })

// Error handler
server.use((error, req, res, next) => {
  res.json({
    error: {
      message: error.message
    }
  })
})

// To test whether the server is reponding to the terminal
server.listen(port, (error) => {
  (error) ?
    (console.error('Error starting', error)
    ) : (
      console.log(`Server started at http//localhost:${port}/`)
    )
})
