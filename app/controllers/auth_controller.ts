// import type { HttpContext } from '@adonisjs/core/http'

import {loginValidator, registerValidator} from "#validators/auth";
import {HttpContext} from "@adonisjs/core/http";
import User from "#models/user";

export default class AuthController {
  async register({ request }:HttpContext) {
    const data = await request.validateUsing(registerValidator)
    const user = await User.create(data)
    return User.accessTokens.create(user)
  }

  async login({ request }:HttpContext) {
    const { email, password } = await request.validateUsing(loginValidator)
    const user = await User.verifyCredentials(email, password)
    return User.accessTokens.create(user)
  }



  async logout({ auth }:HttpContext) {
   const user = auth.user!
    await User.accessTokens.delete(user, user.currentAccessToken.identifier)
    return {message: 'Logged out successfully'}
  }


  async me({ auth }:HttpContext) {
    return auth.user
  }
}
