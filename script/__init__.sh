#
# @Author: AK-12 
# @Date: 2019-01-11 12:47:04 
# @Last Modified by:   AK-12 
# @Last Modified time: 2019-01-11 12:47:04 
#

# start cmd
# name
echo -n 'package name: '
read name
# discript
echo -n 'description: '
read description
# repository
echo -n 'repository(git): '
read repository
# author
echo -n 'author: '
read author

# save to package.json
echo "{
  \"name\": \"${name}\",
  \"version\": \"1.0.0\",
  \"description\": \"${description}\",
  \"repository\": {
    \"type\": \"git\",
    \"url\": \"git+${repository}\"
  },
  \"author\": \"${author}\",
  \"license\": \"ISC\",
  \"main\": \"./lib/index.js\",
  \"scripts\": {
    \"init\": \"./script/__init__.sh\",
    \"new-mod\": \"./script/_newModule_.sh\",
    \"start\": \"tsc --watch\",
    \"dev\": \"webpack --watch\"
  },
  \"devDependencies\": {
    \"typescript\": \"^3.2.1\",
    \"webpack\": \"^3.12.0\"
  }
}" > package.json

# create index.html
echo "<!DOCTYPE html>
<html lang=\"en\">

<head>
  <meta charset=\"UTF-8\">
  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">
  <title>${name}</title>
</head>

<body>
</body>
<script src=\"./build/bundle.js\"></script>

</html>" > index.html

# create readme
echo "# ${name}

> ${description}

\`\`\`bash
# from npm
npm install ${name}

# from github
git clone ${repository}
\`\`\`

## start

\`\`\`bash
# install the typescript and webpack
npm install
\`\`\`

\`\`\`bash
# init package
npm run init

# create new module file
npm run new-mod

# auto compile to commonjs
npm start

# auto compile to es5
npm run dev

\`\`\`

## develope and test

> you should write ts in /src

> ts -(tsc)-> commonjs -(webpack)-> es5

> you should make test in /src/test

> export your core in /src/index.ts!

## publish

> Before publish, there are some items in package.json should to be updated below:

1. name
2. version
3. description
4. repository(url)
5. author

\`\`\`bash
# if all is well, try:
npm publish
\`\`\`

" > README.md