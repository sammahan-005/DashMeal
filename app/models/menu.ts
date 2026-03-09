import { MenuSchema } from '#database/schema'
import { belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { DateTime } from 'luxon'
import Restaurant from '#models/restaurant'

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
}