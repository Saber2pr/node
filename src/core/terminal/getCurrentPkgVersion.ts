/*
 * @Author: saber2pr
 * @Date: 2019-05-27 20:40:27
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-05-27 20:45:44
 */
import { FS } from '../File'

let CALLSTACKLEN = 0

export async function getCurrentPkgVersion(
  path: string = __dirname,
  step = ''
) {
  CALLSTACKLEN++
  if (CALLSTACKLEN > 10) {
    CALLSTACKLEN = null
    throw new Error('getCurrentPkgVersion StackOverFlow')
  }

  try {
    const buffer = await FS.readFile(path + step + '/package.json')
    const pkg = JSON.parse(buffer.toString()) as { version: string }

    return pkg.version
  } catch (error) {
    return await getCurrentPkgVersion(path, step + '/..')
  }
}
