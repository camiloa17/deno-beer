import { Middleware } from 'https://deno.land/x/oak@v11.1.0/mod.ts'
import { getBeers } from '../services/beer.ts'

export default <Middleware> (async ({ response }) => {
	response.body = await getBeers()
})
