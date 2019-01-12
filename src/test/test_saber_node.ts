import { File } from '../core/saber-node'
export async function test_saber_node() {
  const filePath = './hehe/test'
  await File.createFile(filePath, '1')
  await File.pushFile(filePath, 'test1\n')
  await File.pushFile(filePath, 'test2\n')
}
