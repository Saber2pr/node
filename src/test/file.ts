import { FS } from '../core/file'

// FS.exists('./lib').then(console.log)

// FS.stat(`./lib`, 'dir').then(console.log)

// FS.readFile('./lib/index.js').then(res => console.log(res.toString()))

// FS.readdir('./lib').then(console.log)

FS.search('.', 'file').then(console.log)

// FS.mkPath('./__test__/test').then(() => {
//   FS.writeFile('./__test__/test/sayHello', 'hello')
//   FS.writeFile('./__test__/test/sayHello1', 'hello1')
//   FS.writeFile('./__test__/test/sayHello2', 'hello2')
// })

// FS.remove('./__test__')
