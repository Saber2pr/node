# @saber2pr/node

> utils for nodejs

```bash
# from npm
npm install @saber2pr/node

# from github
git clone https://github.com/Saber2pr/node.git
```

# API

## FS

1. exists

   > `fs.exists` 的 Promise 版本

2. stat

   > 检测一个路径是文件夹还是文件

3. readdir

   > `fs.readdir` 的 Promise 版本

4. search

   > 搜索目录下所有文件或所有文件夹

5. readFile

   > `fs.readFile` 的 Promise 版本

6. writeFile

   > `fs.writeFile` 的 Promise 版本

7. mkdir

   > `fs.mkdir` 的 Promise 版本

8. mkPath

   > 创建一条路径

9. unlink

   > `fs.unlink` 的 Promise 版本

10. rmdir

    > `fs.rmdir` 的 Promise 版本

11. clearDir

    > 清空目录下所有文件

12. remove

    > 删除一个目录

## Terminal

1. getUserInput

   > 终端对话交互

2. getParams

   > 获取命令行参数

## Terminal.Print

1. error

   > 命令行输出 `警告`

2. success

   > 命令行输出 `正确`

3. tips

   > 命令行输出 `提示`

## Http

1. cookie

   > 把一个对象转为 `cookie` 字符串

2. deCookie

   > 把一个 `cookie` 字符串转为对象

3. query

   > 从 `request` 从获取参数

## Http.header

> response 的代理

## Http.Exception

> http 异常类，继承自`Error`

1. Http.Exception.resolve

> 把一个 HttpException 发送 ServerResponse

## start

```bash
npm install
```

```bash
npm start

npm test

```

## develope and test

> you should write ts in /src

> you should make test in /src/test

> export your core in /src/index.ts!
