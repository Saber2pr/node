/*
 * @Author: saber2pr
 * @Date: 2019-05-22 18:13:27
 * @Last Modified by:   saber2pr
 * @Last Modified time: 2019-05-22 18:13:27
 */
import { createInterface } from 'readline'

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
