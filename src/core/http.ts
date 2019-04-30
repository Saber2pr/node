/*
 * @Author: saber2pr
 * @Date: 2019-04-30 20:05:30
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-04-30 20:35:12
 */
import { IncomingMessage } from 'http'
import url from 'url'
import { Header } from './http/header'

export namespace Http {
  export const cookie = (obj: Object) =>
    Object.entries(obj)
      .map(([k, v]) => (v === true ? `${k}` : `${k}=${v}`))
      .join(';')

  export const query = (request: IncomingMessage) =>
    url.parse(request.url, true).query

  export const header = new Header()
}
