/*
 * @Author: saber2pr
 * @Date: 2019-05-22 17:40:00
 * @Last Modified by:   saber2pr
 * @Last Modified time: 2019-05-22 17:40:00
 */
import * as fs from 'fs'

export const writeFile = (path: string, data: any) =>
  new Promise<void>((resolve, reject) =>
    fs.writeFile(path, data, err => (err ? reject(err) : resolve()))
  )
