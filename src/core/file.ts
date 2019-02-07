/*
 * @Author: saber2pr
 * @Date: 2019-02-05 11:36:32
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-02-05 11:36:54
 */
import {
  writeFile,
  mkdir,
  PathLike,
  appendFile,
  readFile,
  existsSync,
  readdirSync,
  statSync,
  unlinkSync,
  rmdirSync,
  readdir,
  stat,
  Stats,
  readFileSync
} from 'fs'
import { dirname, join } from 'path'
import { Path } from './path'
/**
 * @exports File
 */
export namespace File {
  /**
   * createFile
   * @param {string} filePath
   * @param {string} value
   */
  export const createFile = async (filePath: string, value: string) => {
    const fileFolderPath = dirname(filePath)
    if (!Path.isExist(fileFolderPath)) {
      await createPath(fileFolderPath)
      await writeFileAsync(filePath, value)
      return
    } else {
      await writeFileAsync(filePath, value)
      return
    }
  }
  /**
   * writeFileAsync
   * @param filePath
   * @param value
   */
  export const writeFileAsync = (filePath: string, value: string) =>
    new Promise((resolve, reject) =>
      writeFile(filePath, value, 'utf8', err =>
        !!err ? reject(err) : resolve()
      )
    )
  /**
   * push
   * @param filePath
   * @param value
   */
  export const push = async (filePath: string, value) =>
    new Promise<NodeJS.ErrnoException>(resolve => {
      appendFile(filePath, value, err => resolve(err))
    })
  /**
   * joinFile
   *
   * @export
   * @param {string} filePath
   * @param {string} anchorContent
   * @param {string} joinContent
   */
  export async function joinFile(
    filePath: string,
    anchorContent: string,
    joinContent: string
  ) {
    const res = await File.read(filePath)
    await File.writeFileAsync(
      filePath,
      res.replace(anchorContent, anchorContent.concat(joinContent))
    )
  }
  /**
   * createDir
   * @param path
   */
  export const createDir = (path: PathLike): Promise<never> =>
    new Promise(resolve => mkdir(path, () => resolve()))
  /**
   * createFolder
   * @param {string} path
   * @returns {Promise<any>}
   */
  export const createPath = async (path: string): Promise<any> => {
    if (Path.isExist(path)) {
      return
    } else {
      await createPath(dirname(path))
      await createDir(path)
      return
    }
  }
  /**
   * read
   * @param path
   */
  export const read = async <T = string>(path: string) =>
    new Promise<T>((resolve, reject) =>
      readFile(path, (err, res) => {
        if (err) {
          reject(err)
        } else {
          const str: any = res.toString()
          resolve(str)
        }
      })
    )
  /**
   * readDir
   * @param filePath
   */
  export const readDir = async (filePath: string) =>
    new Promise<string[]>((resolve, reject) =>
      readdir(filePath, (err, files) => {
        if (err) {
          reject(err)
        } else {
          resolve(files)
        }
      })
    )
  /**
   * fileStat
   * @param filedir
   */
  export const fileStat = async (filedir: string) =>
    new Promise<Stats>((resolve, reject) =>
      stat(filedir, (err, stats) => {
        if (err) {
          reject(err)
        } else {
          resolve(stats)
        }
      })
    )
  /**
   * dirDeepSearch
   *
   * @export
   * @param {string} dir
   * @returns
   */
  export async function dirDeepSearch(dir: string) {
    const result: string[] = []
    const search = async dir => {
      const files = await readDir(dir)
      for (const filename of files) {
        const filedir = join(dir, filename)
        const stats = await fileStat(filedir)
        if (stats.isFile()) {
          result.push(filedir)
        } else if (stats.isDirectory()) {
          await search(filedir)
        }
      }
    }
    await search(dir)
    return result
  }
  /**
   * dirDeepSearchAll
   *
   * @export
   * @param {string[]} dirs
   * @returns
   */
  export async function dirDeepSearchAll(dirs: string[]) {
    const result: string[] = []
    for (const dir of dirs) {
      const files = await File.dirDeepSearch(dir)
      result.push(...files)
    }
    return result
  }
  /**
   * remove
   * @param path
   */
  export const remove = (path: string) => {
    let files = []
    if (existsSync(path)) {
      files = readdirSync(path)
      files.forEach(file => {
        let curPath = path + '/' + file
        if (statSync(curPath).isDirectory()) {
          remove(curPath)
        } else {
          unlinkSync(curPath)
        }
      })
      rmdirSync(path)
    }
  }
  /**
   * json
   */
  export namespace Json {
    /**
     * pipe
     * @param path
     */
    export const pipe = <T>(path: string) => async (
      callback: (fileData: T) => T
    ) =>
      await File.createFile(
        path,
        JSON.stringify(
          callback(JSON.parse(await File.read(path)) as T),
          null,
          2
        )
      )
    /**
     * read json
     * @param json
     */
    export const read = <T>(json: string) =>
      JSON.parse(readFileSync(json) as any) as T
  }
  /**
   * Node
   * @exports
   */
  export namespace Node {
    /**
     * getPackageDir
     * @param packageName
     */
    export const getPackageDir = (packageName: string) =>
      `${process.cwd()}/node_modules/${packageName}`
    /**
     * getPackageFiles
     * @param packageName
     */
    export const getPackageFiles = async (packageName: string) =>
      await File.dirDeepSearch(getPackageDir(packageName))
  }
}
