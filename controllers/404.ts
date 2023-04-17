import { Middleware } from 'https://deno.land/x/oak@v11.1.0/mod.ts'

export default <Middleware> (({ response }) => {
	response.status = 404
	response.body = { msg: 'Not found' }
})
