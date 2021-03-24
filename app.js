const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
// const exphbs = require('express-handlebars')
const connectDB = require('./config/db')

//load dotenv
dotenv.config({path: './config/config.env'})

const app = express()

//middleware
app.use(bodyParser.json())
app.use(cors())

if(process.env.NODE_ENV === 'devepment')
{
    app.use(morgan('dev'))
}

const posts = require('./routes/api/posts')

app.use('/api/posts', posts)

const PORT = process.env.PORT || 3000

app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} on port ${PORT}`))