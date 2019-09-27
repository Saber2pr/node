import { FS } from ".."

async function test() {
  // const files = await FS.search(process.cwd() + '/src', 'file', 2)

  // console.log(files)
  await FS.mkPath("./__test/ss/vv/")
  await Promise.all([
    FS.writeFile("./__test/ss/vv/aa.js", "aa"),
    FS.writeFile("./__test/ss/vv/bb.js", "aa")
  ])
}

test()
