/*
 * @Author: saber2pr
 * @Date: 2019-04-30 20:05:30
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-05-01 17:28:04
 */
import { Header } from './http/header'
import { query as Query } from './http/query'
import { HttpException } from './http/httpException'

export namespace Http {
  export const cookie = (obj: Object) =>
    Object.entries(obj)
      .map(([k, v]) => (v === true ? `${k}` : `${k}=${v}`))
      .join(';')

  export const query = Query

  export const header = new Header()

  export const Exception = HttpException
}
