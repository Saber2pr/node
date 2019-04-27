/*
 * @Author: saber2pr
 * @Date: 2019-04-27 22:14:08
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-04-27 22:15:06
 */
export namespace Http {
  export const cookie = (obj: Object) =>
    Object.entries(obj)
      .map(([k, v]) => (v === true ? `${k}` : `${k}=${v}`))
      .join(';')
}
