/*
 * @Author: saber2pr
 * @Date: 2019-05-22 17:38:48
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-05-22 17:41:59
 */
import { stat } from './stat'
import { readdir } from './readdir'

export const search = async (
  path: string = process.cwd(),
  type: 'file' | 'dir' = 'file',
  exclude: string[] = ['/node_modules', '/.git']
) => {
  const stack = [path]
  const result: string[] = []
  while (stack.length) {
    const current = stack.pop()
    if (exclude.map(p => process.cwd() + p).includes(current)) continue
    const isDir = await stat(current, 'dir')
    const isFile = await stat(current, 'file')
    if (isDir) {
      const children = await readdir(current)
      children.length &&
        children.forEach(child => stack.push(`${current}/${child}`))
    }
    type === 'file' && isFile && result.push(current)
    type === 'dir' && isDir && result.push(current)
  }
  return result
}
