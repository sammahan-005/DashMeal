import Menu from '#models/menu'
import type { HttpContext } from '@adonisjs/core/http'

export default class DashboardController {
    public async index({ view }: HttpContext    ) {
        const menus = await Menu.query().preload('restaurant').orderBy('created_at', 'desc')
        return view.render('pages/Acceuil', { menus })
    }
}