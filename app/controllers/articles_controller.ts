// import type { HttpContext } from '@adonisjs/core/http'

import {HttpContext} from "@adonisjs/core/http";
import Article from "#models/article";
import {articleValidator} from "#validators/article";

export default class ArticlesController {
  async index({request, response}:HttpContext) {
    return await Article.all()
  }
  async store({request, auth}:HttpContext) {
    auth.authenticate().then(async (user) => {
      const data_validation = request.validateUsing(articleValidator)
      const title = request.input('title')
      const content = request.input('content')
      const image_url = request.input('image_url')
      const id_user = user.id
      const data = {
                      title:title,
                      content:content,
                      image_url:image_url,
                      user_id: id_user
                    }

      return await Article.create(data)
    })
  }
  async show({request, response}:HttpContext) {
    const id = request.param('id')
    return await Article.find(id)
  }
  async update({request, response}:HttpContext) {
    const id = request.param('id')
    const data = request.all()
    const article = await Article.find(id)
    article.merge(data)
    await article.save()
    return article
  }
  async destroy({request, response}:HttpContext) {
    const id = request.param('id')
    const article = await Article.find(id)
    await article.delete()
    return response.status(204)
  }
}
