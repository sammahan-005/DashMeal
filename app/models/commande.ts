import { CommandeSchema } from '#database/schema'
import { belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { DateTime } from 'luxon'
import User from '#models/user'
import Menu from '#models/menu'
import Restaurant from '#models/restaurant'

export default class Commande extends CommandeSchema {

    @column({isPrimary: true})
    declare id: number

    @column()
    declare user_id: number

    @column()
    declare menu_id: number

    @column()
    declare quantity: number

    @column.dateTime({ autoCreate: true })
    declare createdAt: DateTime

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    declare updatedAt: DateTime

    @belongsTo(() => User)
    declare user: BelongsTo<typeof User>

    @belongsTo(() => Menu)
    declare menu: BelongsTo<typeof Menu>

    @belongsTo(() => Restaurant)
    declare restaurant: BelongsTo<typeof Restaurant>
}