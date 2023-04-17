import {
	Database,
	PostgresConnector,
} from 'https://deno.land/x/denodb@v1.2.0/mod.ts'
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from '../config.ts'

import { Beer } from './beer.ts'

const connection = new PostgresConnector({
	host: DB_HOST,
	username: DB_USER,
	password: DB_PASSWORD,
	database: DB_NAME,
	port: DB_PORT,
})

const db = new Database(connection)

db.link([Beer])

export default db
