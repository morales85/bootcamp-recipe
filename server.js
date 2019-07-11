const express = require('express')
const app = express()
const http = require('http')
const request = require('request');
const port = 8080
const path = require('path')


app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname,  'node_modules')))


app.get('/sanity', function (req, res) {
    res.send("OK")
})

app.get('/recipes/:ingredient', function (req, res) {
    let ingredient = req.params.ingredient
    request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`, { json: true }, (err, respond, body) => {
        const data = body.results
        console.log(data[0])
            res.send("testing")
    })
})





app.listen(port, function(){
    console.log(`Running server on port ${port}`)
})
