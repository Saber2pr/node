import { File, Server } from '../core/saber-node'
export async function test_saber_node() {
  Server.create(2333, './__server')
  return
}
