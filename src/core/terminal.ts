/*
 * @Author: saber2pr
 * @Date: 2019-02-05 11:34:49
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-02-05 11:36:08
 */
import { createInterface } from 'readline'
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
