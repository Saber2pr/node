/*
 * @Author: saber2pr
 * @Date: 2019-05-22 17:15:55
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-05-22 18:38:04
 */
import * as http from 'http'
import * as https from 'https'

function onData(req: http.IncomingMessage, resolve: (value: string) => void) {
  let str = ''
  req.on('data', chunk => (str += chunk))
  req.on('end', () => resolve(str))
}

export namespace Request {
  export async function get(
    options: string | http.RequestOptions | URL
  ): Promise<string>
  export async function get(
    url: string | URL,
    options: http.RequestOptions
  ): Promise<string>
  export async function get(arg1: any, arg2?: any): Promise<string> {
    let result: string
    try {
      result = await new Promise<string>((resolve, reject) => {
        if (arg2) {
          http
            .get(arg1, arg2, req => onData(req, resolve))
            .on('error', err => reject(err))
        } else {
          http
            .get(arg1, req => onData(req, resolve))
            .on('error', err => reject(err))
        }
      })
    } catch (error) {
      result = await new Promise<string>((resolve, reject) => {
        if (arg2) {
          https
            .get(arg1, arg2, req => onData(req, resolve))
            .on('error', err => reject(err))
        } else {
          https
            .get(arg1, req => onData(req, resolve))
            .on('error', err => reject(err))
        }
      })
    } finally {
      return result
    }
  }
}
