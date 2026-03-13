import vine from '@vinejs/vine'

export const MenuCreationValidator = vine.create({
    name: vine.string(),
    description: vine.string(),
    price: vine.number(),
})

