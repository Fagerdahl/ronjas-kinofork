//Here goes the functionality in my express app.
//This file needs to contain all my Routes

//express
import express from 'express'
import { engine } from 'express-handlebars'
import axios from 'axios'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use('/static', express.static(path.join(process.cwd(), '../static')))

//Configuration template engine
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './templates')

//Route for movies-list
app.get('/', async (req, res) => {
  try {
    //Getting movies from the API source
    const response = await axios.get('https://plankton-app-xhkom.ondigitalocean.app/api/movies')
    const movies = response.data.data //Movies list returned from API

    res.render('home', {
      title: 'Welcome to Ronjas express app', //injections
      movies, //injections, movies to our page
      logoTitle: 'Kino Kvikkjokk', //injections
      footerText: 'Kino 2025', //injections
    })
  } catch (error) {
    console.error('Fel vid hämtning av filmer:', error)
    res.status(500).send('Problem getting movieslist and Ronjas express app')
  }
})

//Route for single movie
app.get('/movie/:id', async (req, res) => {
  try {
    const { id } = req.params
    const response = await axios.get(`https://plankton-app-xhkom.ondigitalocean.app/api/movies/${id}`)
    const movie = response.data

    //Rendering a page with moviedata required in the assignment
    res.render('movie', { title: movie.title, movie, logoTitle: 'Kino Kvikkjokk', footerText: 'Kino 2025' })
  } catch (error) {
    res.status(404).render('404', { title: 'Film ej hittad', logoTitle: 'Kino Kvikkjokk', footerText: 'Kino 2025' })
  }
})

//Route for 404-handling
app.use((req, res) => {
  res.status(404).render('404', {
    title: 'Sidan hittades tyvärr inte',
    logoTitle: 'Kino Kvikkjokk',
    footerText: 'Kino 2025',
  })
})

export default app
