import { expect, test } from '@jest/globals'
import request from 'supertest'
import app from '../src/app.js'

describe('404 Page', () => {
  it('should render 404 page for non-existent routes', async () => {
    const response = await request(app).get('/non-existent-route')
    expect(response.statusCode).toBe(404)
    expect(response.text).toContain('Sidan hittades tyvärr inte')
    expect(response.text).toContain('Återgå till startsidan')
  })

  it('should return 404 for non-existent movie pages', async () => {
    const response = await request(app).get('/movie/99999')
    expect(response.statusCode).toBe(404)
    expect(response.text).toContain('Sidan hittades tyvärr inte')
  })
})
