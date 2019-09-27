/*
 * @Author: saber2pr
 * @Date: 2019-09-27 21:35:05
 * @Last Modified by:   saber2pr
 * @Last Modified time: 2019-09-27 21:35:05
 */
import { readFile } from "./readFile"
import { writeFile } from "./writeFile"

export const copy = (from: string, to: string) =>
  readFile(from).then(buffer => writeFile(to, buffer))
