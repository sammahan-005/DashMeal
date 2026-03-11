import { MenuSchema } from '#database/schema'
import { belongsTo, column, manyToMany } from '@adonisjs/lucid/orm'
import type { BelongsTo,ManyToMany } from '@adonisjs/lucid/types/relations'
import { DateTime } from 'luxon'
import Restaurant from '#models/restaurant'
import Commande from './commande.ts'

export default class Menu extends MenuSchema {

    @column({ isPrimary: true })
    declare id: number

    @column()
    declare name: string

    @column()
    declare description: string

    @column()
    declare price: number

    @column()
    declare image: string | null

    @column()
    declare restaurant_id: number

    @column.dateTime({ autoCreate: true })
    declare createdAt: DateTime

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    declare updatedAt: DateTime

    @belongsTo(() => Restaurant)
    declare restaurant: BelongsTo<typeof Restaurant>

    @manyToMany(() => Commande)
    declare commandes: ManyToMany<typeof Commande>
}