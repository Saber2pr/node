/*
 * @Author: saber2pr 
 * @Date: 2019-05-22 17:37:53 
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-05-22 17:39:34
 */
import * as fs from 'fs'

export const stat = (path: string, type: 'dir' | 'file') =>
  new Promise<boolean>((resolve, reject) => {
    fs.stat(path, (err, statu) => {
      err && reject(err)
      if (type === 'dir') {
        resolve(statu.isDirectory())
      } else if (type === 'file') {
        resolve(statu.isFile())
      } else {
        reject(`${path} is not a file or directory!`)
      }
    })
  })
