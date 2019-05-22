/*
 * @Author: saber2pr 
 * @Date: 2019-05-22 17:42:37 
 * @Last Modified by:   saber2pr 
 * @Last Modified time: 2019-05-22 17:42:37 
 */
import { search } from './search'
import { unlink } from './unlink'

export const clearDir = async (path: string) => {
  for (const file of await search(path)) await unlink(file)
}
