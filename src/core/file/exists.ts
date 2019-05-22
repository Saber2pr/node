/*
 * @Author: saber2pr
 * @Date: 2019-05-22 17:37:15
 * @Last Modified by:   saber2pr
 * @Last Modified time: 2019-05-22 17:37:15
 */
import * as fs from 'fs'

export const exists = (path: string) =>
  new Promise<boolean>(resolve => fs.exists(path, resolve))
