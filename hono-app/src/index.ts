import { Hono } from 'hono'


const app = new Hono()


app.use('*', async (c, next) => {
  console.log(`${c.req.method} ${c.req.url}`)
  await next()
})


app.get('/', (c) => {
  return c.text('Hello User!!!!!!')
})


app.get('/greet', (c) => {
  const name = c.req.query('name') || 'Guest'
  return c.text(`Hello, ${name}!`)
})


app.post('/data', async (c) => {
  const data = await c.req.json()
  return c.json({
    message: 'Data received!',
    receivedData: data
  })
})


app.put('/update', async (c) => {
  const data = await c.req.json()

  return c.json({
    message: 'Data updated successfully!',
    updatedData: data
  })
})


app.delete('/delete', (c) => {

  return c.json({
    message: 'Data deleted successfully!'
  })
})


export default app
