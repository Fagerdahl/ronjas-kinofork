// This is where the server should start when using an express app!
// This file should -not- contain functionality
//Functionality needs to be in next module (app.js) so the "server.js" needs to be imported into app.js

// Starta servern

// index.js - Kör Express-servern
import app from './app.js' // Importera Express-applikationen från app.js

const PORT = 5080 // Ange porten du vill att servern ska lyssna på

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
