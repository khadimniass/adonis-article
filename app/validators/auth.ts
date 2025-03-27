import vine from '@vinejs/vine'

export const registerValidator = vine.compile(
  vine.object({
    email: vine
      .string()
      .email()
      .normalizeEmail().unique( async (db, value)=>{
        const user = await db
          .from('users')
          .where('email', value)
          .first()
        return !user
      }),
    password: vine.string().minLength(6).maxLength(15),
    firstname: vine.string().minLength(2).maxLength(15),
    lastname: vine.string().minLength(2).maxLength(15),
    telephone: vine.string()
  })
)

export const loginValidator = vine.compile(
  vine.object({
    email: vine.string().email().normalizeEmail(),
    password: vine.string(),
  })
)
