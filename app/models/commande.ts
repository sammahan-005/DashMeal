import { CommandeSchema } from '#database/schema'
import { belongsTo, column, manyToMany} from '@adonisjs/lucid/orm'
import type { BelongsTo, ManyToMany } from '@adonisjs/lucid/types/relations'

import { DateTime } from 'luxon'
import User from '#models/user'
import Menu from '#models/menu'

export default class Commande extends CommandeSchema {

    @column({isPrimary: true})
    declare id: number

    @column()
    declare user_id: number


    @column.dateTime({ autoCreate: true })
    declare createdAt: DateTime

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    declare updatedAt: DateTime

    @belongsTo(() => User)
    declare user: BelongsTo<typeof User>

    @manyToMany(() => Menu)
    declare menus: ManyToMany<typeof Menu>


}