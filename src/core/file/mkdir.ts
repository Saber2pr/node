/*
 * @Author: saber2pr
 * @Date: 2019-05-22 17:40:35
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-05-22 17:42:24
 */
import * as fs from 'fs'

export const mkdir = (path: string) =>
  new Promise<void>((resolve, reject) =>
    fs.mkdir(path, err => (err ? reject(err) : resolve()))
  )
