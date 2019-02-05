/*
 * @Author: saber2pr
 * @Date: 2019-02-05 11:35:39
 * @Last Modified by:   saber2pr
 * @Last Modified time: 2019-02-05 11:35:39
 */
import { existsSync } from 'fs'
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
