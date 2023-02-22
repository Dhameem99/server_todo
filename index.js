const express=require('express');
const cors= require('cors')
const taskRoute= require('./routes/taskRoute')
const app =express()
const port =8000
const connection = require('./utils/db')
app.use(express.json())
app.use(cors())
app.use('/api/tasks',taskRoute)
connection()
app.get("/",(req,res)=>{
    res.send("HEello")
})

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})