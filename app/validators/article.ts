import vine from '@vinejs/vine'
import auth from "#config/auth";

export const articleValidator = vine.compile(
  vine.object({
    title: vine.string().minLength(3).maxLength(255),
    content: vine.string(),
    image_url: vine.string(),
  })
)
