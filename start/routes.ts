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
import ArticlesController from "#controllers/articles_controller";

  router.get('/', [ArticlesController, 'index']).as('articles.index')
  router.post('/add-post', [ArticlesController, 'store'])
  router.get('/show-post/:id', [ArticlesController, 'show'])

  router.put('/update-post/:id', [ArticlesController, 'update'])
  router.delete('/delete-post/:id', [ArticlesController, 'destroy'])

  router.post('/register', [AuthController,'register']).as('auth.register')
  router.post('/login', [ AuthController, 'login' ]).as('auth.login')
  router.delete('/logout', [ AuthController, 'logout' ]).as('auth.logout')
  router.get('/me', [ AuthController, 'me' ]).as('auth.me')
