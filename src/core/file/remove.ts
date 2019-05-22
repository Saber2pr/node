/*
 * @Author: saber2pr
 * @Date: 2019-05-22 18:11:07
 * @Last Modified by:   saber2pr
 * @Last Modified time: 2019-05-22 18:11:07
 */
import { clearDir } from './clearDir'
import { search } from './search'
import { rmdir } from './rmdir'

export const remove = async (path: string) => {
  await clearDir(path)
  const dirs = await search(path, 'dir')
  dirs.sort((a, b) => b.length - a.length)
  for (const dir of dirs) await rmdir(dir)
}
