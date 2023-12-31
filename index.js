require('dotenv').config()
const express = require("express");
const app = express()

const port = 3000


app.get('/', (req, res) => {
    res.send("Hello World")
})
app.get('/twitter', (req, res) => {
    res.send("PriyankVasoya")
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login at this site</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2>Youtube </h2>');
})
app.get('/facebook', (req, res) => {
    res.send("Welcome to facebook")
})
app.get('/yahoo', (req, res) => {
    res.send("Welcome to Yahoo")
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})