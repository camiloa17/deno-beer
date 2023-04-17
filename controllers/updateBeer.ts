import { RouterMiddleware, RouteParams } from "https://deno.land/x/oak@v11.1.0/mod.ts"
import { updateBeer } from '../services/beer.ts'

export default <RouterMiddleware<string, RouteParams<string>>>(async ({ params, request, response }) => {
  const beerId = Number(params.id)

  if (!beerId && !Number.isInteger(beerId)) {
    response.status = 400;
    response.body = { msg: "Invalid beer id" };
    return;
  }

  if (!request.hasBody) {
    response.status = 400;
    response.body = { msg: "Invalid beer data" };
    return
  }
  const { name, brand, is_premium } = await request.body().value;

  await updateBeer(beerId, { name, brand, is_premium });

  response.body = { msg: 'Beer updated!' }
})