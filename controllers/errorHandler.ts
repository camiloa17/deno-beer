import { Middleware } from 'https://deno.land/x/oak@v11.1.0/mod.ts'

export default <Middleware> (async ({ response }, nextFn) => {
	try {
		await nextFn()
	} catch (err) {
		response.status = 500
		response.body = { msg: err.message }
	}
})
