import express from 'express'
import axios from 'axios'
import { engine } from 'express-handlebars'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const port = 5080

// Middleware for static files
app.use(express.static(path.join(__dirname, 'public')))

//Templ engine
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

//Route for all movies
app.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://plankton-app-xhkom.ondigitalocean.app/api/movies')
    const movies = response.data

    res.render('home', { movies })
  } catch (error) {
    res.status(500).send('Det gick inte att hämta filmer')
  }
})

// Route for one movie
app.get('/movie/:id', async (req, res) => {
  const { id } = req.params

  try {
    const response = await axios.get(`https://plankton-app-xhkom.ondigitalocean.app/api/movies/${id}`)
    const movie = response.data

    res.render('movie', { movie })
  } catch (error) {
    res.status(500).send('Det gick inte att hämta filmen')
  }
})

//serve
app.listen(port, () => {
  console.log(`Servern körs på http://localhost:${port}`)
})
