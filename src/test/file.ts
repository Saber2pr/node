import { FS } from '../core/File'

async function test() {
  const files = await FS.search(process.cwd() + '/src', 'file', 2)

  console.log(files)
}

test()
