/*
 * @Author: saber2pr
 * @Date: 2019-05-22 17:41:27
 * @Last Modified by:   saber2pr
 * @Last Modified time: 2019-05-22 17:41:27
 */
import * as fs from 'fs'

export const unlink = (path: string) =>
  new Promise<void>((resolve, reject) =>
    fs.unlink(path, err => (err ? reject(err) : resolve()))
  )
