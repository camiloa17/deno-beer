import { RouterMiddleware, RouteParams } from "https://deno.land/x/oak@v11.1.0/mod.ts"
import { getBeer } from '../services/beer.ts'

export default <RouterMiddleware<string, RouteParams<string>>>(async ({ params, response }) => {
  const beerId = Number(params.id)
 
  if (!beerId && !Number.isInteger(beerId)) {
    response.status = 400;
    response.body = { msg: "Invalid beer id" };
    return;
  }
  
  const foundBeer = await getBeer(beerId)
  
  if(!foundBeer){
    response.status = 404;
    response.body = { msg: `Beer with ID ${beerId} not found` };
    return;
  }

  response.body = foundBeer
})
