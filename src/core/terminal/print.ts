/*
 * @Author: saber2pr
 * @Date: 2019-05-22 18:14:22
 * @Last Modified by:   saber2pr
 * @Last Modified time: 2019-05-22 18:14:22
 */
export const error = (message: string) =>
  console.log(`\u001b[31m${message}\u001b[37m`)

export const success = (message: string) =>
  console.log(`\u001b[32m${message}\u001b[37m`)

export const tips = (message: string) =>
  console.log(`\u001b[34m${message}\u001b[37m`)

export const notice = (message: string) =>
  console.log(`\u001b[33m${message}\u001b[33m`)
