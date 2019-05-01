/*
 * @Author: saber2pr
 * @Date: 2019-04-30 20:05:30
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-05-01 19:18:24
 */
import { Header } from './http/header'
import { query as Query } from './http/query'
import { HttpException } from './http/httpException'
import { cookie as Cookie, deCookie as DeCookie } from './http/cookie'

export namespace Http {
  export const cookie = Cookie

  export const deCookie = DeCookie

  export const query = Query

  export const header = new Header()

  export const Exception = HttpException
}
