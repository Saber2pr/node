/*
 * @Author: saber2pr
 * @Date: 2019-05-22 17:38:16
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-05-22 17:40:31
 */
import * as fs from 'fs'

export const readdir = (dir: string) =>
  new Promise<string[]>((resolve, reject) =>
    fs.readdir(dir, (err, files) => (err ? reject(err) : resolve(files)))
  )
