import vine from '@vinejs/vine'

export const MenuCreationValidator = vine.create({
    name: vine.string(),
    description: vine.string(),
    price: vine.number(),
    category: vine.enum(['entree', 'plat', 'dessert', 'boisson']),
    image: vine.file({
        size: '2mb',
        extnames: ['jpg', 'png', 'jpeg']
    }).optional()

})

