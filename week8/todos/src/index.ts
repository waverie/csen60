import { serve } from '@hono/node-server' 6.3k (gzipped: 2.7k)
import {serveStatic} from '@hono/node-server/serve-static' 4.3k
import { Hono } from 'hono' 19.7k (gzipped: 7.4k)


const app = new Hono()

// our database
const todos = [
  {
    id: 1,
    description: "Turn in homework",
    isComplete: false
  },

  {
    id: 2,
    description: "Study for test",
    isComplete: false
  },
]

app.get('/api/todos', (c) => {
  // database call to fetch todos
  return c.json(todos)
})

const port = 3000
console.log(`Server is running on http://localhost:${port}`)

serve({
  fetch: app.fetch,
  port
})

app.use("/*", serveStatic({
  root: "./static",
}))


