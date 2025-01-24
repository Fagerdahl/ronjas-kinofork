//Here goes the functionality in my express app.
//This file needs to contain all my Routes

//express
import express from 'express'
import { engine } from 'express-handlebars'

const app = express()

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './templates')

//simple testroute
app.get('/', (req, res) => {
  res.render('home', { title: 'Welcome to my express app' })
})

//axios, used to HTTP requests to extern API:s.
//Axios is needed to send or get data across the network, axios makes the API calls
//(fs.promises is used when handling files locally)
import axios from 'axios'
axios
  .get('https://plankton-app-xhkom.ondigitalocean.app/api/movies')
  .then((response) => {
    console.log(response.data) // Skriv ut data från API:t
  })
  .catch((error) => {
    console.error('Error fetching movies:', error)
  })

export default app
