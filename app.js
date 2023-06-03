const express = require('express')
const app = express()
const tasks = require('./routes/Rtasks')
const port = 3000

app.use('api/v1/tasks', tasks)
app.use(express.static('./public'))
app.use(express.json())

app.listen(port, ()=>{
    console.log(`listening to port ${port}...`)
})
