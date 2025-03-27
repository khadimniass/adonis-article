import { DateTime } from 'luxon'
import {BaseModel, belongsTo, column} from '@adonisjs/lucid/orm'
import User from "#models/user";

export default class Article extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  public title: string;

  @column()
  public content: string;

  @column()
  public image_url?: string;

  @column()
  public userId: number;

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(()=>User)
  public user: ReturnType<typeof User>

}
