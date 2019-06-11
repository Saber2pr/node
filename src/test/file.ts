import { FS } from '../core/File'

async function test() {
  // const files = await FS.search(process.cwd() + '/src', 'file', 2)

  // console.log(files)
  await FS.mkFile('./__test/ss/aa.ts', 'aa')
}

test()
