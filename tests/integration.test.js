import request from 'supertest' //testing http requests to server
import app from '../src/app.js' //Client to our supertest, no server needed when using supertest

//Describe is a way to group our tests, in this block I define my test cases
describe('Integrationstestning av Ronjas Kino Kvikkjokk', () => {
  //Testing startpage, GET request to /
  test('GET / - Should return code 200 if page exists', async () => {
    const response = await request(app).get('/')
    expect(response.status).toBe(200)

    // Test if redered HTML page contains what we expect based on template file
    expect(response.text).toContain('Welcome to Ronjas express app')
    expect(response.text).toContain('Visningar')
  })

  // Test one single movie- page when movie is available, GET req to ID 1
  test('GET /movie/:id - Should return code 200 if movie is available', async () => {
    const response = await request(app).get('/movie/1')
    expect(response.status).toBe(200)

    //Test if we can go back to startpage from the single movie- page
    expect(response.text).toContain('Tillbaka')
  })

  // Test single movie- page when movie is not available by calling an invalid ID
  test('GET /movie/:id - Should return 404 if movie is NOT available', async () => {
    const response = await request(app).get('/movie/99999')
    expect(response.status).toBe(404)

    // Test to see if respons is correct, when movie is not found
    expect(response.text).toContain('Film ej hittad')
  })

  // Test invalid routes that are not available in my express app
  test('GET /nonexistent - ska returnera 404 för ogiltiga routes', async () => {
    const response = await request(app).get('/nonexistent')
    expect(response.status).toBe(404)

    // Test if response is correct when route is invalid
    expect(response.text).toContain('Sidan hittades tyvärr inte')
  })
})
