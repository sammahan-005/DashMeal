import { CommandeMenuSchema } from '#database/schema'
import { column } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'

export default class CommandeMenu extends CommandeMenuSchema {

    @column({ isPrimary: true })
    declare id: number

    @column()
    declare commande_id: number

    @column()
    declare menu_id: number

    @column.dateTime({ autoCreate: true })
    declare createdAt: DateTime

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    declare updatedAt: DateTime
}