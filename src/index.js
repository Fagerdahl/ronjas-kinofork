//STARTS THE SERVER

import app from './app.js'
import { fetchAPI, fetchMovie } from '../static/Script/fetch.js'

const api = {
  fetchAPI,
  fetchMovie,
}

app.listen(5080, () => {
  console.log(`Server is running on http://localhost:5080`)
})
