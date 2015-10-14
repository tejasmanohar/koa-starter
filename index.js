
/**
 * Module dependencies.
 */

import logger from 'koa-logger'
import koa from 'koa'

// koa app
const app = koa()

// logging
app.use(logger())

// port
const port = process.env.PORT || 3000;

// start server
app.listen(port)

console.log(`listening on port ${port}`)
