//Here goes the functionality in my express app.
//This file needs to contain all my Routes

//axios, used to HTTP requests to extern API:s. 
//Axios is needed to send or get data across the network, axios makes the API calls
//(fs.promises is used when handling files locally) 
import axios from 'axios';
axios.get('https://plankton-app-xhkom.ondigitalocean.app/api/movies')
  .then(response => {
    console.log(response.data); // Skriv ut data från API:t
  })
  .catch(error => {
    console.error('Error fetching movies:', error);
  });


//express
import express from 'express';
const app = express();

