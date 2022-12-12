const express = require('express')


const db = require('./utils/database')
const {port} = require('../config').api

const usersRouter = require('./users/users.router')

const app = express()

db.authenticate()
.then( () => console.log("DB authenticated"))
.catch(err => console.log(err))

db.sync()
.then(() => console.log("DB synced"))
.catch(err => console.log(err)) 

app.use(express.json())

app.use('/api/v1/users',usersRouter)

app.get('/', (req, res) => {
    res.status(200).json({message: 'Ok!'})
}) 

app.listen(port,() => {
    console.log(`Server started at port ${port}`)
})
