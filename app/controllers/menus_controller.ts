import Menu from '#models/menu'
import { MenuCreationValidator } from '#validators/menu'
import { type HttpContext } from '@adonisjs/core/http'
//import { dd } from '@adonisjs/core/services/dumper'

// accessible only by restaurant owner
export default class MenusController {
  

  /**
   * Display form to create a new record
   */
  async create({view}: HttpContext) {
    return view.render('pages/menus/create')
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response, auth }: HttpContext) {
    
    await auth.authenticate()
    const user = auth.user!
    const restaurant = await user.related('restaurant').query().firstOrFail()
    const {image,...data} = await request.validateUsing(MenuCreationValidator)
    const menu = await restaurant.related('menus').create(data)

    if (image) {
      await image.moveToDisk(`menus/${menu.id}.${image.extname}`)
      menu.image = `menus/${menu.id}.${image.extname}`
      await menu.save()
    }
    //dd(menu)
    return response.redirect().toRoute('restaurants.show',{id: restaurant.id  })
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
      const { image, ...validated } = await request.validateUsing(MenuCreationValidator)
      menu.merge(validated)
      
      if (image) {
        await image.moveToDisk(`menus/${menu.id}.${image.extname}`)
        menu.image = `menus/${menu.id}.${image.extname}`
      }

      await menu.save()
      return view.render('pages/menus/edit', { menu })
  }

  /**
   * Delete record
   */
  async destroy({ params, response }: HttpContext) {
      const menu = await Menu.findOrFail(params.id)
      await menu.delete()
      return response.redirect().toRoute('welcome')
  }
}