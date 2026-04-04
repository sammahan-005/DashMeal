import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'
//import { dd } from '@adonisjs/core/services/dumper'

export default class RestaurantOwnerMiddleware {
  async handle(ctx: HttpContext, next: NextFn) {
    /**
     * Middleware logic goes here (before the next call)
     */
    await ctx.auth.authenticate()
    const restaurant = await ctx.auth.user!.related('restaurant').query().first()
    
    if (!restaurant) {
      
      return ctx.response.unauthorized('You must be a restaurant owner to access this resource.')
    }

    /**
     * Call next method in the pipeline and return its output
     */
    const output = await next()
    return output
  }
}