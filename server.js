const express = require('express')
const app = express()
const dotenv = require('dotenv')
const db_conect = require('./utils/db')


dotenv.config()

const port = process.env.port || 3000 

app.get('/',(req,res) => res.send('Hello World!'))

db_conect()

app.listen(port, () => console.log(`server is running on port ${port}!`)
)