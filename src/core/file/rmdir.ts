/*
 * @Author: saber2pr
 * @Date: 2019-05-22 17:42:06
 * @Last Modified by:   saber2pr
 * @Last Modified time: 2019-05-22 17:42:06
 */
import * as fs from 'fs'

export const rmdir = (path: string) =>
  new Promise<void>((resolve, reject) =>
    fs.rmdir(path, err => (err ? reject(err) : resolve()))
  )
