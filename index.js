require ("dotenv").config()
const express = require('express')
const dbConnection = require('./database/dbConnection')
const cors = require("cors")
const app = express()
const port = 3000
dbConnection()
const route = require("./route");

app.use(cors())
app.use(express.json())
app.use(route)
app.listen(port, () => {
  console.log("backend running")
})
