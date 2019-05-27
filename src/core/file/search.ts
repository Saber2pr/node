/*
 * @Author: saber2pr
 * @Date: 2019-05-22 17:38:48
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-05-22 17:41:59
 */
import { stat } from './stat'
import { readdir } from './readdir'

export interface SearchNode {
  depth: number
  path: string
}

export const search = async (
  path: string,
  type: 'file' | 'dir' = 'file',
  maxDepth = 100
) => {
  const queue: Array<SearchNode> = [
    {
      path,
      depth: 0
    }
  ]

  const result: string[] = []

  while (queue.length) {
    const current = queue.shift()

    if (current.depth > maxDepth) break

    const isDir = await stat(current.path, 'dir')
    const isFile = await stat(current.path, 'file')

    if (isDir) {
      const childrenPath = await readdir(current.path)

      childrenPath.length &&
        childrenPath.forEach(child =>
          queue.push({
            depth: current.depth + 1,
            path: `${current.path}/${child}`
          })
        )
    }

    type === 'file' && isFile && result.push(current.path)
    type === 'dir' && isDir && result.push(current.path)
  }
  return result
}
