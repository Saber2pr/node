/*
 * @Author: AK-12
 * @Date: 2019-01-11 21:41:32
 * @Last Modified by: AK-12
 * @Last Modified time: 2019-01-14 09:15:46
 */
import { createInterface } from 'readline'
import {
  exists,
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
import { dirname, resolve, join } from 'path'
import { createServer, IncomingMessage, ServerResponse } from 'http'
/**
 * @exports Terminal
 */
export namespace Terminal {
  /**
   * getUserInput
   * @param question
   */
  export const getUserInput = (question: string): Promise<string> =>
    new Promise(resolve => {
      const terminal = createInterface({
        input: process.stdin,
        output: process.stdout
      })
      terminal.question(question, answer => {
        terminal.close()
        resolve(answer.trim())
      })
    })
  /**
   * getParams
   */
  export const getParams = () => process.argv.slice(2)
  /**
   * Print
   */
  export namespace Print {
    /**
     * error
     * @param message
     */
    export const error = (message: string) =>
      console.log(`\u001b[31m${message}\u001b[37m`)
    /**
     * success
     * @param message
     */
    export const success = (message: string) =>
      console.log(`\u001b[32m${message}\u001b[37m`)
    /**
     * tips
     * @param message
     */
    export const tips = (message: string) =>
      console.log(`\u001b[34m${message}\u001b[37m`)
  }
}
/**
 * @exports Path
 */
export namespace Path {
  /**
   * getFileName
   * @param path
   */
  export const getFileName = (path: string): string => {
    const solve = path.split('/')
    return solve[solve.length - 1]
  }
  /**
   * isExist
   * @param path
   */
  export const isExist = (path: string): boolean => existsSync(path)
  /**
   * slashCount
   * @param str
   */
  export const slashCount = (str: string): number => str.split('/').length - 1
  /**
   * makePathStep
   * @param num
   */
  export const makePathStep = (num: number): string => '../'.repeat(num)
  /**
   * split
   * @param name
   */
  export const split = (name: string) => {
    const strArr = name.split('.')
    const type = strArr.pop()
    return {
      str: strArr.join('.'),
      type
    }
  }
}
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
    if (!(await Path.isExist(fileFolderPath))) {
      await createPath(fileFolderPath)
      writeFile(filePath, value, 'utf-8', err =>
        !!err ? console.log(err) : null
      )
      return
    } else {
      writeFile(filePath, value, 'utf-8', err =>
        !!err ? console.log(err) : null
      )
      return
    }
  }
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
    if (await Path.isExist(path)) {
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
        let filedir = join(dir, filename)
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
     * @param dir
     */

    export const getPackageFiles = async (dir: string) =>
      await File.dirDeepSearch(getPackageDir(dir))
  }
}
/**
 * Server
 */
export namespace Server {
  /**
   * getFromRequest
   * @param req
   */
  const getFromRequest = (req: IncomingMessage) =>
    new Promise<string>((resolve, reject) => {
      let str = ''
      req.on('data', data => (str += data))
      req.on('end', () => resolve(str))
      req.on('error', err => reject(err))
    })
  /**
   * requestListener
   * @param req
   * @param res
   * @param rootDir
   */
  const requestListener = (rootDir: string) => async (
    req: IncomingMessage,
    res: ServerResponse
  ) => {
    const url = resolve(rootDir + req.url)
    if (req.method === 'GET') {
      File.read(url)
        .then(data => res.write(data))
        .then(() => res.end())
        .catch(err => console.log(err))
      return
    } else if (req.method === 'POST') {
      const data_fromReq = await getFromRequest(req)
      if (await Path.isExist(url)) {
        File.push(url, data_fromReq)
          .then(() => res.end())
          .catch(err => console.log(err))
      } else {
        File.createFile(url, data_fromReq)
          .then(() => res.end())
          .catch(err => console.log(err))
      }
    }
    return
  }
  /**
   * create
   * @param port
   * @param rootDir
   */
  export const create = (port: number, rootDir: string = '/') =>
    createServer(requestListener(rootDir)).listen(port, 'localhost', () =>
      console.log(`http://localhost:${port}/index.html`)
    )
}
