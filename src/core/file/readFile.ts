/*
 * @Author: saber2pr
 * @Date: 2019-05-22 17:39:39
 * @Last Modified by:   saber2pr
 * @Last Modified time: 2019-05-22 17:39:39
 */
import * as fs from 'fs'

export const readFile = (path: string) =>
  new Promise<Buffer>((resolve, reject) =>
    fs.readFile(path, (err, data) => (err ? reject(err) : resolve(data)))
  )
