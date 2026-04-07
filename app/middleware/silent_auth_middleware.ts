import type { HttpContext } from '@adonisjs/core/http'
//import { dd } from '@adonisjs/core/services/dumper'
import type { NextFn } from '@adonisjs/core/types/http'
/**
 * Silent auth middleware can be used as a global middleware to silent check
 * if the user is logged-in or not.
 *
 * The request continues as usual, even when the user is not logged-in.
 */
export default class SilentAuthMiddleware {
  async handle(ctx: HttpContext, next: NextFn) {
    if (ctx.auth.user) {
      const commande = await ctx.auth.user
        .related('commandes')
        .query()
        .where('validated', false)
        .first()
        
      let pendingCount = 0

      if (commande) {
        const result = await commande.related('menus').query().count('* as total').first()
        pendingCount = result?.$extras.total || 0
      }

      // On partage la valeur avec TOUTES les vues Edge
      ctx.view.share({
        pendingCount
      })
    }
   
    return next()
  }
}
