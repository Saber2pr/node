/*
 * @Author: saber2pr
 * @Date: 2019-04-30 19:36:26
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-04-30 20:34:39
 */
import { OutgoingHttpHeaders } from 'http'

export interface Headers {
  'Access-Control-Allow-Credentials'?: string
  'Access-Control-Allow-Origin'?: string
  'Accept-Patch'?: string
  'Accept-Ranges'?: string
  Age?: string
  Allow?: string
  'Cache-Control'?: string
  Connection?: string
  'Content-Disposition'?: string
  'Content-Encoding'?: string
  'Content-Language'?: string
  'Content-Length'?: string
  'Content-Location'?: string
  'Content-Range'?: string
  'Content-Type'?: string
  Date?: string
  ETag?: string
  Expires?: string
  'Last-Modified'?: string
  Link?: string
  Location?: string
  P3P?: string
  Pragma?: string
  'Proxy-Authenticate'?: string
  'Public-Key-Pins'?: string
  Refresh?: string
  'Retry-After'?: string
  Server?: string
  'Set-Cookie'?: string
  Status?: string
  Trailer?: string
  'Transfer-Encoding'?: string
  Upgrade?: string
  Vary?: string
  Via?: string
  Warning?: string
  'WWW-Authenticate'?: string
}

export type HeadersType<T> = T & Headers

export type HeadersEntries = Array<[keyof Headers, string]>

export function getHeadersEntries(headers: AnyHeaders) {
  return Object.entries(headers) as HeadersEntries
}

export interface AnyHeaders extends Headers {
  [extraHeader: string]: string | string[] | undefined
}

export const DefaultHeaders: AnyHeaders = {
  'Content-Type': 'text/plain;charset=utf-8',
  'Access-Control-Allow-Credentials': 'true'
}

export class Header<T extends AnyHeaders = {}> {
  constructor(extraHeaders: T = <T>{}) {
    getHeadersEntries(extraHeaders).forEach(([k, v]) => this.append(k, v))
  }

  private headers: HeadersType<T> = <HeadersType<T>>DefaultHeaders

  public append(extraHeaders: Partial<HeadersType<T>>): this
  public append<K extends keyof HeadersType<T>>(
    key: K,
    value: HeadersType<T>[K]
  ): this
  public append<K extends keyof HeadersType<T>>(
    key: Partial<T> | K,
    value?: HeadersType<T>[K]
  ): this {
    if (typeof key === 'object') {
      Object.assign(this.headers, key)
    } else {
      Object.assign(this.headers, { [key]: value })
    }
    return this
  }

  public getHeaders(): OutgoingHttpHeaders {
    return this.headers
  }

  public remove(key: keyof HeadersType<T>) {
    key in this.headers && delete this.headers[key]
    return this
  }

  public clearAll() {
    this.headers = <HeadersType<T>>{}
    return this
  }
}
