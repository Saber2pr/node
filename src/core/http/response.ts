/*
 * @Author: saber2pr
 * @Date: 2019-05-02 20:44:55
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-05-02 20:45:16
 */
import { ServerResponse } from 'http'
import { Headers } from './header'

export function setHeader(
  response: ServerResponse,
  name: Headers,
  value: string | number | string[]
) {
  response.setHeader(name, value)
}

export function getHeader(response: ServerResponse, name: Headers) {
  return response.getHeader(name)
}

export function getHeaders(response: ServerResponse) {
  return response.getHeaders() as Record<Headers, string | number | string[]>
}

export function getHeaderNames(response: ServerResponse) {
  return response.getHeaderNames() as Headers[]
}

export function hasHeader(response: ServerResponse, name: Headers) {
  return response.hasHeader(name)
}

export function removeHeader(response: ServerResponse, name: Headers) {
  response.removeHeader(name)
}

export function writeHead(
  response: ServerResponse,
  statusCode: number,
  headers: Record<Headers, string | number | string[]>
) {
  response.writeHead(statusCode, headers)
}
