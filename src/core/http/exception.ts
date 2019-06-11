/*
 * @Author: saber2pr
 * @Date: 2019-05-01 17:23:32
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-05-01 17:29:18
 */
import { ServerResponse } from 'http'
import { Headers } from './header'

export class Exception extends Error {
  constructor(public message: string, public code: number) {
    super(message)
  }
  static resolve(
    HttpException: any,
    response: ServerResponse,
    headers?: Headers
  ) {
    return new Promise(resolve => {
      const err: Exception = HttpException
      response.writeHead(err.code, <any>headers)
      response.end(err.message, resolve)
    })
  }
}
