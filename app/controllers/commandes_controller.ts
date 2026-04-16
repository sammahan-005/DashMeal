

import Menu from '#models/menu'
import type { HttpContext } from '@adonisjs/core/http'
import Commande from '#models/commande'
//import { dd } from '@adonisjs/core/services/dumper'

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
                                
     
    return view.render('pages/commandes/index', { commandes })
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
  

  async validate({params, response}:HttpContext){
    const commande = await Commande.findOrFail(params.id)
    commande.validated = true
    await commande.save()
    return response.redirect().toRoute('commandes.index')

  }

  async history({view, auth}:HttpContext){
    await auth.authenticate()
    const user = auth.user!
    const commandes = await user.related('commandes')
                                .query()
                                .where('validated', true)
                                .preload('menus')
                                .orderBy('created_at', 'desc')
                                
    return view.render('pages/commandes/history', { commandes })
  }
  /**
   * Show individual record
   */
  async show({ params, view }: HttpContext) {
      const commande = await Commande.query().where('id', params.id).preload('menus').first()
      return view.render('pages/commandes/show', { commande })

  }

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
  async destroy({ params, auth, response }: HttpContext) {
    
    const user = auth.user!
    const commande = await user.related('commandes').query().where('validated', false).first()

    if (commande) {
      
      const menus = await commande.related('menus').query()
      if (menus.length !== 1) {
        // On récupère le premier enregistrement dans la table pivot pour ce menu précis
        const pivotRecord = await commande.related('menus')
          .pivotQuery()
          .where('menu_id', params.id)
          .first()

        if (pivotRecord) {
          await commande.related('menus').pivotQuery().where('id', pivotRecord.id).delete()
        }
      } else {
        
        await commande.delete()
      }
    }            
    
    return response.redirect().back()
  }
}