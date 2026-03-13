import Menu from '#models/menu'
import { MenuCreationValidator } from '#validators/menu'
import { type HttpContext } from '@adonisjs/core/http'

// accessible only by restaurant owner
export default class MenusController {
  /**
   * Display a list of resource
   */
  async index({ view, auth }: HttpContext) {
    await auth.authenticate()
    const user = auth.user!
    const menus = await Menu.query()
                            .where('restaurant_id', user.restaurant.id)
    return view.render('pages/menus/index', { menus })
    // const menus = await auth.user!.related('menus').query()
  }

  /**
   * Display form to create a new record
   */
  async create({view}: HttpContext) {
    return view.render('pages/menus/create')
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response, }: HttpContext) {
    const data = await request.validateUsing(MenuCreationValidator)
    await Menu.create(data)
    return response.redirect().toRoute('menus.index')
  }

  /**
   * Show individual record
   */
  async show({ params,view }: HttpContext) {
      const menu = await Menu.findOrFail(params.id)
      return view.render('pages/menus/show', { menu })
  }

  /**
   * Edit individual record
   */
  async edit({ params,view }: HttpContext) {
      const menu = await Menu.findOrFail(params.id)
      return view.render('pages/menus/edit', { menu })
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, view }: HttpContext) {
      let menu = await Menu.findOrFail(params.id)
      const validated = await request.validateUsing(MenuCreationValidator)
      menu.merge(validated)
      await menu.save()
      return view.render('pages/menus/edit', { menu })
  }

  /**
   * Delete record
   */
  async destroy({ params, response }: HttpContext) {
      const menu = await Menu.findOrFail(params.id)
      await menu.delete()
      return response.redirect().toRoute('menus.index')
  }
}