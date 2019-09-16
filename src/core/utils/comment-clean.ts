/*
 * @Author: saber2pr
 * @Date: 2019-09-16 10:16:24
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-09-16 10:17:02
 */
import { writeFile, readFile } from "../file"
import { REG } from "../reg"

export const clean = (path: string) =>
  readFile(path)
    .then(b => b.toString().replace(REG.Comment, ""))
    .then(str => writeFile(path, str))
