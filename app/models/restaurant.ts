import { RestaurantSchema } from '#database/schema'
import { belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany, BelongsTo } from '@adonisjs/lucid/types/relations'
import { DateTime } from 'luxon'
import Menu from './menu.ts'
import User from './user.ts'

export default class Restaurant extends RestaurantSchema {
    @column({ isPrimary: true })
    declare id: number

    @column()
    declare user_id: number

    @column()
    declare name: string

    @column()
    declare address: string

    @column()
    declare phone_number: string

    @column.dateTime({ autoCreate: true })
    declare createdAt: DateTime

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    declare updatedAt: DateTime

    @hasMany(() => Menu)
    declare menus: HasMany<typeof Menu>

    @belongsTo(() => User)
    declare user: BelongsTo<typeof User>
}