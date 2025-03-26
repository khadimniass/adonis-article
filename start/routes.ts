/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import AuthController from "#controllers/auth_controller";

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

  router.post('/register', [AuthController,'register']).as('auth.register')
  router.post('/login', [ AuthController, 'login' ]).as('auth.login')
  router.delete('/logout', [ AuthController, 'logout' ]).as('auth.logout')
  router.get('/me', [ AuthController, 'me' ]).as('auth.me')
