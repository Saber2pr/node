/*
 * @Author: saber2pr
 * @Date: 2019-05-01 14:56:40
 * @Last Modified by:   saber2pr
 * @Last Modified time: 2019-05-01 14:56:40
 */
import { IncomingMessage } from 'http'
import url from 'url'

export const query = <T>(request: IncomingMessage): Promise<T> => {
  const param = url.parse(request.url, true).query
  if (Object.keys(param).length) {
    return Promise.resolve(param as any)
  } else {
    return new Promise((resolve, reject) => {
      let res = ''
      request.on('data', chunk => (res += chunk))
      request.on('end', () => resolve(JSON.parse(res)))
      request.on('error', () =>
        reject({
          statusCode: request.statusCode,
          statusMessage: request.statusMessage
        })
      )
    })
  }
}
