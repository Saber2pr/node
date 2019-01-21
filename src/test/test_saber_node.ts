import { File, Server, Terminal, Path } from '../core/saber-node'
export async function test_saber_node() {
  // Terminal.Print.error('test')
  // Terminal.Print.success('test')
  // Terminal.Print.tips('test')
  console.log(await File.read(`${process.cwd()}/package.json`))
  return
}
