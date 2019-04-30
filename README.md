# @saber2pr/node

> utils for nodejs

```bash
# from npm
npm install @saber2pr/node

# from github
git clone https://github.com/Saber2pr/-saber2pr-node.git
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

2. query

   > 从 `request` 从获取 url 参数

## Http.header

1. append

   > 追加`响应头`

   ```ts
   Http.header.append('Access-Control-Allow-Credentials', 'false').append({
     'Accept-Patch': '',
     Connection: ''
   })
   ```

2. getHeaders

   > 获取 `header 对象`

   ```ts
   Http.header.getHeaders()
   ```

3. remove

   > 删除`一个`字段

   ```ts
   Http.header.remove('Accept-Patch')
   ```

4. clearAll

   > 删除`所有`字段

   ```ts
   Http.header.clearAll()
   ```

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
