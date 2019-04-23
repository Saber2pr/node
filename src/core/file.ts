/*
 * @Author: saber2pr
 * @Date: 2019-04-23 12:42:42
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-04-23 13:41:08
 */
/*
 * @Author: saber2pr
 * @Date: 2019-04-13 17:15:00
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-04-13 17:30:49
 */
import fs from 'fs'
import { dirname } from 'path'

export namespace FS {
  export const exists = (path: string) =>
    new Promise<boolean>(resolve => fs.exists(path, resolve))

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

  export const readdir = (dir: string) =>
    new Promise<string[]>((resolve, reject) =>
      fs.readdir(dir, (err, files) => (err ? reject(err) : resolve(files)))
    )

  export const search = async (path: string, type: 'file' | 'dir' = 'file') => {
    const stack = [path]
    const result: string[] = []
    while (stack.length) {
      const current = stack.pop()
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

  export const readFile = (path: string) =>
    new Promise<Buffer>((resolve, reject) =>
      fs.readFile(path, (err, data) => (err ? reject(err) : resolve(data)))
    )

  export const writeFile = (path: string, data: any) =>
    new Promise<void>((resolve, reject) =>
      fs.writeFile(path, data, err => (err ? reject(err) : resolve()))
    )

  export const mkdir = (path: string) =>
    new Promise<void>((resolve, reject) =>
      fs.mkdir(path, err => (err ? reject(err) : resolve()))
    )

  export const mkPath = async (path: string): Promise<void> => {
    if (await exists(path)) {
      return
    } else {
      await mkPath(dirname(path))
      await mkdir(path)
    }
  }

  export const unlink = (path: string) =>
    new Promise<void>((resolve, reject) =>
      fs.unlink(path, err => (err ? reject(err) : resolve()))
    )

  export const rmdir = (path: string) =>
    new Promise<void>((resolve, reject) =>
      fs.rmdir(path, err => (err ? reject(err) : resolve()))
    )

  export const clearDir = async (path: string) => {
    for (const file of await search(path)) await unlink(file)
  }

  export const remove = async (path: string) => {
    await clearDir(path)
    const dirs = await search(path, 'dir')
    dirs.sort((a, b) => b.length - a.length)
    for (const dir of dirs) await rmdir(dir)
  }
}
