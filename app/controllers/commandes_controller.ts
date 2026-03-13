

import Menu from '#models/menu'
import type { HttpContext } from '@adonisjs/core/http'

export default class CommandesController {
  /**
   * Display a list of resource
   */
  async index({ view, auth }: HttpContext) {
    
    await auth.authenticate()
    const user = auth.user!
    const commandes = await user.related('commandes')
                                .query()
                                .where('validated', false)
                                .preload('menus')
     
    return view.render('Commandes/Index', { commandes })
  }

  // /**
  //  * Display form to create a new record
  //  */
  // async create({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  async store({ params, auth, session }: HttpContext) {
    const user = auth.user!
    const commande = await user.related('commandes').query().where('validated', false).first()
    const menu= await Menu.findOrFail(params.Id)
    if (!commande) {
      const newCommande = await user.related('commandes').create({
    
        validated: false,
      })
      await newCommande.related('menus').attach([menu.id])

      session.flash('success', 'Menu ajouté à votre commande')
    } else {
      await commande.related('menus').attach([menu.id])
    }

    session.flash('success', 'Menu ajouté à votre commande')
  }

  // /**
  //  * Show individual record
  //  */
  // async show({ params }: HttpContext) {}

  // /**
  //  * Edit individual record
  //  */
  // async edit({ params }: HttpContext) {}

  // /**
  //  * Handle form submission for the edit action
  //  */
  // async update({ params, request }: HttpContext) {}

  /**
   * Delete record
   */
  async destroy({ params, auth }: HttpContext) {
    
    const user = auth.user!
    const commande = await user.related('commandes').query().where('validated', false).first()

    if (commande) {
      
      const menus = await commande.related('menus').query()
      if (menus.length !== 1) {
        
        await commande.related('menus').detach([params.id])
      } else {
        
        await commande.delete()
      }
    }            
      
  }
}