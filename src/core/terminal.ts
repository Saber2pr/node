/*
 * @Author: saber2pr
 * @Date: 2019-02-05 11:34:49
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-04-23 12:57:11
 */
import { createInterface } from 'readline'

export namespace Terminal {
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

  export const getParams = () => process.argv.slice(2)

  export namespace Print {
    export const error = (message: string) =>
      console.log(`\u001b[31m${message}\u001b[37m`)

    export const success = (message: string) =>
      console.log(`\u001b[32m${message}\u001b[37m`)

    export const tips = (message: string) =>
      console.log(`\u001b[34m${message}\u001b[37m`)
  }
}
