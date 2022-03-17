// localhost:3000
const express = require('express')
const Thenews = require("./tools/News")
const app = express()
const port = process.env.PORT || 5000

const path = require('path')
const publicDirectory = path.join(__dirname, '../public')
app.use(express.static(publicDirectory))

app.set('view engine', 'hbs');
const viewsDirectory = path.join(__dirname, '../templates/views')
app.set('views', viewsDirectory)

const hbs = require('hbs')
const partialsPath = path.join(__dirname, '../templates/partials')
hbs.registerPartials(partialsPath)

app.get('/', (req, res) => {
    Thenews((error, data) => {
        if (error) {
            return res.send(error)
        }
        res.render("index", {
            status: data.body.status,
            totalResults: data.body.totalResults,
            articles: data.body.articles,
        })

    })
})
app.get('*', (req, res) => {
    res.render('404page', {
        title: '404 page'
    })
})


app.listen(port, () => {
    console.log('Server is running')
})