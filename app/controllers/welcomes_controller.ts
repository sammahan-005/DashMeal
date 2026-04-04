import type { HttpContext } from '@adonisjs/core/http'
import Menu from '#models/menu'
import {dd} from '@adonisjs/core/services/dumper'

export default class WelcomesController {
    async index({ view, auth}: HttpContext) {
        await auth.authenticate()
        const user = auth.user!
        const menus = await Menu.all()
        const commandes = await user.related('commandes').query().where('validated', false) 
        //dd(commandes)
        return view.render('pages/welcome', { menus:menus, commandes:commandes})
    }


}