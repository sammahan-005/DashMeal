import vine from '@vinejs/vine'

export const RestaurantCreationValidator = vine.create({
    name: vine.string(),
    description: vine.string(),
    address: vine.string(),
    phone_number: vine.string(),
})