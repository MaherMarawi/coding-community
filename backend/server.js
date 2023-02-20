

const express = require('express')
const app = express()
const path = require('path')
const cookieParser = require('cookie-parser')
const feedRouter = require('./config/questionRouter')
const userRouter = require('./config/userRouter')
const commentRouter = require('./config/commentRouter')
const http = require('http')
const bodyParser = require('body-parser')
const cors = require('cors')
const mailRouter = require('./config/mailRouter')
const server = http.createServer(app)

// Connect to DB
// const dotenv = require('dotenv')
// dotenv.config({path:__dirname+'/.env'});
require('dotenv').config()
require('./models/mongoose')

// Middelware

app.use(express.static('public'))
app.use(express.urlencoded({extended: true})); 
app.use(express.json());
app.use(cookieParser())
app.use(bodyParser.json())
app.use(cors({origin: '*',
              methods:[ "GET", "POST", "DELETE", "PUT"]}))
app.use(feedRouter)
app.use(userRouter)
app.use(commentRouter)
app.use(mailRouter)

// if (process.env.NODE_ENV === 'production') {
//     // Set static folder
//     app.use(express.static('client/build'));
  
//     app.get('*', (req, res) => {
//       res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//     });
//   }

//listen to Port

const port = process.env.PORT || 5000

server.listen(port)

