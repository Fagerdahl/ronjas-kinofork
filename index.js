// This is where the server should start when using an express app! 
// This file should -not- contain functionality
//Functionality needs to be in next module (app.js) so the "server.js" needs to be imported into app.js 

// Starta servern
app.listen(5080, () => {
    console.log('Server is running on http://localhost:5080');
  });