// Create web server
const express = require('express')
const app = express()
const port = 3000
// Use path module
const path = require('path')
// Use body-parser
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// Use comments.js
const comments = require('./comments.js')

// Get all comments
app.get('/comments', (req, res) => {
    res.json(comments.getComments())
})

// Get comment by id
app.get('/comments/:id', (req, res) => {
    const id = req.params.id
    res.json(comments.getCommentById(id))
})

//