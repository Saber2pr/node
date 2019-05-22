/*
 * @Author: saber2pr
 * @Date: 2019-05-22 17:41:08
 * @Last Modified by:   saber2pr
 * @Last Modified time: 2019-05-22 17:41:08
 */
import { exists } from './exists'
import { dirname } from 'path'
import { mkdir } from './mkdir'

export const mkPath = async (path: string): Promise<void> => {
  if (await exists(path)) {
    return
  } else {
    await mkPath(dirname(path))
    await mkdir(path)
  }
}
