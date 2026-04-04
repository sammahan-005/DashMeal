

import Menu from '#models/menu'
import type { HttpContext } from '@adonisjs/core/http'
import Commande from '#models/commande'
import { dd } from '@adonisjs/core/services/dumper'

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
                                
     
    return view.render('pages/commandes/Index', { commandes })
  }

  // /**
  //  * Display form to create a new record
  //  */
  // async create({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  // N'oublie pas d'ajouter 'request' dans les arguments
async store({ request, auth, session, response }: HttpContext) {
  const user = auth.user!
  
  const menuId = request.input('menuId') 
  
  const menu = await Menu.findOrFail(menuId)

  
  let commande = await user.related('commandes').query().where('validated', false).first()

  if (!commande) {

    commande = await user.related('commandes').create({
      validated: false,
    })
  }

  await commande.related('menus').attach([menu.id])

  session.flash('success', `${menu.name} ajouté à votre commande`)

  return response.redirect().back()
}


  async validate({params}:HttpContext){
    const commande = await Commande.findOrFail(params.id)
    commande.validated = true
    await commande.save()

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