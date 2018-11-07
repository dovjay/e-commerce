const express = require('express')
const app = express()
const port = 3000
const UserRoute = require('./routes/user')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/user', UserRoute)
app.use('/store', StoreRoute)

app.use((req, res) => {
  res.status(404).json({ message: 'Not Found!' })
})

app.listen(port, () => {
  console.log('Listening on port', port)
})