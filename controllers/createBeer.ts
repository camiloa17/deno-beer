import { Middleware } from 'https://deno.land/x/oak@v11.1.0/mod.ts'
import { createBeer } from '../services/beer.ts'

export default <Middleware> (async ({ response, request }) => {
	if (!request.hasBody) {
		response.status = 400
		response.body = { msg: 'No beer data provided' }
		return
	}

	const { name, brand, is_premium } = await request.body().value

	if (
		(!name && typeof name !== 'string') ||
		(!brand && typeof brand !== 'string') || typeof is_premium !== 'boolean'
	) {
		response.status = 422
		response.body = {
			msg: 'Incorrect beer data. Name and brand are required and type string, also check is_premium as type boolean',
		}
		return
	}
	const beer = await createBeer({ name, brand, is_premium })

	response.body = { msg: 'Beer created', beer }
})
