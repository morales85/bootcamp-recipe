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
        const receta = data.map(r => {return {ingredients: r.ingredients, title: r.title, thumbnail: r.thumbnail, href: r.href}})
        console.log(receta)
            res.send(receta)
    })
})



app.listen(port, function(){
    console.log(`Running server on port ${port}`)
})
