const express = require('express')
const app = express()

const PORT = process.env.PORT || 4747;

app.get('/',(req,res)=>{
    res.send('Hello! This is a sample app!')
})

app.get('/hi',(req,res)=>{
    res.send(`Hi! ${req.query.name}`)
})
app.get('/bye',(req,res)=>{
    res.send(`Bye! ${req.query.name}`)
})

app.get('/tour', (req,res)=>{
    res.send('Here comes the rockstar')
})

app.listen(PORT,()=>{
    console.log('server is running')
})