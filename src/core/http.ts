/*
 * @Author: saber2pr
 * @Date: 2019-04-30 20:05:30
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-05-02 20:46:28
 */
import * as Response from './http/response'
import { query as Query } from './http/query'
import { HttpException } from './http/httpException'
import { cookie as Cookie, deCookie as DeCookie } from './http/cookie'

export namespace Http {
  export const cookie = Cookie

  export const deCookie = DeCookie

  export const query = Query

  export const response = Response

  export const Exception = HttpException
}
