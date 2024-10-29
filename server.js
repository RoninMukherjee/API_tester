import express from 'express'
import 'dotenv/config'
import axios from 'axios'
const app = express()
const port = process.env.PORT || 3000
app.use(express.static('public')) // this will serve the html,css,js from public folder
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

/* Code here */ 

// Listen to incoming requests
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})