/*
 * @Author: saber2pr
 * @Date: 2019-05-01 19:17:10
 * @Last Modified by:   saber2pr
 * @Last Modified time: 2019-05-01 19:17:10
 */
export const cookie = (obj: Object) =>
  Object.entries(obj)
    .map(([k, v]) => (v === true ? `${k}` : `${k}=${v}`))
    .join(';')

export const deCookie = <T>(cookie: string): T =>
  cookie.split(';').reduce(
    (out, cur) => {
      const union = cur.split('=')
      const k = union[0]
      const v = union[1] || true
      return {
        ...out,
        [k]: v
      }
    },
    {} as T
  )
