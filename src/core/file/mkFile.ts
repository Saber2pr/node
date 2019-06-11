/*
 * @Author: saber2pr
 * @Date: 2019-06-11 20:01:04
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-11 20:05:38
 */
import { dirname } from 'path'
import { exists } from './exists'
import { mkPath } from './mkPath'
import { writeFile } from './writeFile'

export const mkFile = async (file: string, value: string) => {
  const dir = dirname(file)

  if (await exists(dir)) {
    await writeFile(file, value)
  } else {
    await mkPath(dir)

    await writeFile(file, value)
  }
}
