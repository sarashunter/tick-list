const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const app = express()
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)
app.use(bodyParser.json())

app.get('/ping', (req, res) =>{
    return res.send('pong')
})
app.use('/climbingroutes', require('./routes/dbRoutes/climbingRoutes'))

const PORT = process.env.PORT || 8080

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Testing',
      version: '0.1.0',
      description: 'This is an app for swagger testing',
      license: {
        name: 'MIT',
        url: 'https://spdx.org/licenses/MIT.html'
      },
      contact: {
        name: 'Sara Hunter',
        email: 'sarashunter@gmail.com',
        url: 'http://blahs.com'
      }
    },
    servers: [
      {
        url: 'http://localhost:8080/'
      }
    ]
  },
  apis: ['./routes/dbRoutes/climbingRoutes.js']
}

const specs = swaggerJsdoc(options)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))

app.listen(PORT)

console.log(`Server listening on port: ${PORT}`)
