/**
 * A collection of server methods to handle categories
 */

import * as mongoose from 'mongoose'
import { Request, Response } from 'express'

import { CategorySchema } from '../models/category.model'
import Config from '../constants/config'

const Category = mongoose.model('Category', CategorySchema)

export class CategoryController {

  /**
   * Get all existing categories
   * @return a collection of all existing categories
   */
  public getAll = async (_: Request, res: Response) => {

    try {
      const categories = await Category.find()
      res.json({ message: categories, code: Config.RESPONSE_CODE.success })
    } catch (err) {
      res.send({ message: err, code: Config.RESPONSE_CODE.error })
    }

  }
}
