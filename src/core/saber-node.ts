/*
 * @Author: AK-12
 * @Date: 2019-01-11 21:41:32
 * @Last Modified by: AK-12
 * @Last Modified time: 2019-01-14 09:15:46
 */
import { createInterface } from 'readline'
import { exists, writeFile, mkdir, PathLike, appendFile, readFile } from 'fs'
import { dirname, resolve } from 'path'
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
  export const isExist = (path: string): Promise<boolean> =>
    new Promise(resolve => exists(path, exists => resolve(exists)))
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
  export const read = async (path: string) =>
    new Promise<string>((resolve, reject) =>
      readFile(path, (err, res) => {
        if (err) {
          reject(err)
        } else {
          resolve(res.toString())
        }
      })
    )
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
    ) => {
      await File.createFile(
        path,
        JSON.stringify(
          callback(JSON.parse(await File.read(path)) as T),
          null,
          2
        )
      )
      return
    }
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
