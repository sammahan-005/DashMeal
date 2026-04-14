import Restaurant from '#models/restaurant'
import Commande from '#models/commande'
import { type HttpContext } from '@adonisjs/core/http'
import { RestaurantCreationValidator } from '#validators/restaurant'
import { dd } from '@adonisjs/core/services/dumper'


export default class RestaurantsController {
  
  /**
     * Display a list of resource
     */
    // async index({params, view, auth}: HttpContext) {
    //   await auth.authenticate()
    //   const user = auth.user!
    //   const restaurant = (await user.related('restaurant').query().firstOrFail()).load('menus')
    //   const commandes = await Commande.query().where('validated', true).preload('menus').where('restaurant_id', params.id)
      
    //   return view.render('pages/restaurants/index', { commandes, restaurant })
    // }


  /**
   * Display form to create a new record
   */
  async create({view}: HttpContext) {

    return view.render('pages/restaurants/create')
  }

  async pending({ view, params }: HttpContext) {

    const restaurant = await Restaurant.findOrFail(params.id)

    const toutesLesCommandes = await Commande.query()
      .where('validated', true)
      // .where('delivered', false)
      .preload('menus')
      .join('users', 'commandes.user_id', 'users.id')
      .select('commandes.*')
      .select('users.full_name as user_name')
      .orderBy('commandes.created_at', 'desc')


    const commandes = toutesLesCommandes.filter(commande =>
      commande.menus. some((m) => m.restaurant_id === Number(params.id))
    )

    //dd(commandes)

    return view.render('pages/restaurants/pending', { commandes, restaurant })
  }
  /**
   * Handle form submission for the create action
   */
  async store({ request, response, auth }: HttpContext) {
  //  dd(request.all())
    await auth.authenticate()
    const user = auth.user!
    const validated = await request.validateUsing(RestaurantCreationValidator)
    const restaurant = await user.related('restaurant').create(validated)
    return response.redirect().toRoute('restaurants.show', { id: restaurant.id })
  }

  /**
   * Show individual record
   */
  async show({view, params}: HttpContext) {
    const restaurant = await Restaurant.query()
    .where('id', params.id)
    // .preload('menus')
    .firstOrFail()
    const menus = await restaurant.related('menus').query()
    //dd(menus)
    return view.render('pages/restaurants/index', { restaurant, menus })
  }

  async ready({ params, response }: HttpContext) {
    const commande = await Commande.findOrFail(params.id)
    commande.ready = true
    await commande.save()
    return response.redirect().back()
  }

  async delivered({ params, response }: HttpContext) {
    const commande = await Commande.findOrFail(params.id)
    commande.delivered = true
    await commande.save()
    return response.redirect().back()
  }

  // /**
  //  * Edit individual record
  //  */
  // async edit({ params }: HttpContext) {}

  // /**
  //  * Handle form submission for the edit action
  //  */
  // async update({ params, request }: HttpContext) {}

  // /**
  //  * Delete record
  //  */
  // async destroy({ params }: HttpContext) {}
}