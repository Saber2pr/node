/*
 * @Author: AK-12
 * @Date: 2019-01-11 21:41:32
 * @Last Modified by: AK-12
 * @Last Modified time: 2019-01-12 13:15:21
 */
import { createInterface } from 'readline'
import { exists, writeFile, mkdir, PathLike, appendFile } from 'fs'
import { dirname } from 'path'
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
   * pushFile
   * @param filePath
   * @param value
   */
  export const pushFile = async (filePath: string, value) =>
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
    const exists = await Path.isExist(path)
    if (exists) {
      return
    } else {
      await createPath(dirname(path))
      await createDir(path)
      return
    }
  }
}
