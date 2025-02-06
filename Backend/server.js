const express = require('express')

require('dotenv').config()

const port = process.env.PORT || 6969

const app = express()

app.use(express.json())

app.get("/", (req,res)=>{
    res.send("This is Home Route")
})

app.listen(port, ()=>{
    console.log(`The server is running at port: ${port}`)
})