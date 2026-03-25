import Restaurant from '#models/restaurant'
import Commande from '#models/commande'
import { type HttpContext } from '@adonisjs/core/http'
import { RestaurantCreationValidator } from '#validators/restaurant'
// import { dd } from '@adonisjs/core/services/dumper'

export default class RestaurantsController {
  
  /**
     * Display a list of resource
     */
    async index({params, view}: HttpContext) {
      const commandes = await Commande.query().where('validated', true).preload('menus').where('restaurant_id', params.id)
      
      return view.render('pages/restaurants/index', { commandes })
    }


  /**
   * Display form to create a new record
   */
  async create({view}: HttpContext) {

    return view.render('pages/restaurants/create')
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
    const restaurant = await Restaurant.findOrFail(params.id)
    return view.render('pages/restaurants/index', { restaurant })
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