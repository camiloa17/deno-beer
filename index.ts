import { Application } from 'https://deno.land/x/oak@v11.1.0/mod.ts'
import "https://deno.land/std@0.177.0/dotenv/load.ts"
import db from './db/index.ts'
import { APP_HOST, APP_PORT } from './config.ts'
import router from './routes.ts'
import _404 from './controllers/404.ts'
import errorHandler from './controllers/errorHandler.ts'

const app = new Application()

// set up db
await db.sync()

app.use(errorHandler)
app.use(router.routes())
app.use(router.allowedMethods())
app.use(_404)

console.log(`Listening on port:${APP_PORT}`)

await app.listen(`${APP_HOST}:${APP_PORT}`)
