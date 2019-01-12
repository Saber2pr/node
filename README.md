# saber-node

> utils for nodejs

```bash
# from npm
npm install saber-node

# from github
git clone https://github.com/Saber2pr/saber-node.git
```

## start

```bash
# install the typescript and webpack
npm install
```

```bash
# init package
npm run init

# create new module file
npm run new-mod

# auto compile to commonjs
npm start

# run test script
npm run test

```

## develope and test

> you should write ts in /src

> ts -(tsc)-> commonjs

> you should make test in /src/test

> export your core in /src/index.ts!

## publish

> Before publish, there are some items in package.json should to be updated below:

1. name
2. version
3. description
4. repository(url)
5. author

```bash
# if all is well, try:
npm publish
```
