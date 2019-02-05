/*
 * @Author: saber2pr
 * @Date: 2019-02-05 11:37:45
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-02-05 11:38:05
 */
import { createServer, IncomingMessage, ServerResponse } from 'http'
import { resolve } from 'path'
import { File } from './file'
import { Path } from './path'
/**
 * Server
 */
export namespace Server {
  /**
   * getFromRequest
   * @param req
   */
  const getFromRequest = (req: IncomingMessage) =>
    new Promise<string>((resolve, reject) => {
      let str = ''
      req.on('data', data => (str += data))
      req.on('end', () => resolve(str))
      req.on('error', err => reject(err))
    })
  /**
   * requestListener
   * @param req
   * @param res
   * @param rootDir
   */
  const requestListener = (rootDir: string) => async (
    req: IncomingMessage,
    res: ServerResponse
  ) => {
    const url = resolve(rootDir + req.url)
    if (req.method === 'GET') {
      File.read(url)
        .then(data => res.write(data))
        .then(() => res.end())
        .catch(err => console.log(err))
      return
    } else if (req.method === 'POST') {
      const data_fromReq = await getFromRequest(req)
      if (Path.isExist(url)) {
        File.push(url, data_fromReq)
          .then(() => res.end())
          .catch(err => console.log(err))
      } else {
        File.createFile(url, data_fromReq)
          .then(() => res.end())
          .catch(err => console.log(err))
      }
    }
    return
  }
  /**
   * create
   * @param port
   * @param rootDir
   */
  export const create = (port: number, rootDir: string = '/') =>
    createServer(requestListener(rootDir)).listen(port, 'localhost', () =>
      console.log(`http://localhost:${port}/index.html`)
    )
}
