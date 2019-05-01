// import './http'
import url from 'url'
console.log(
  Object.keys(
    url.parse('http://user:pass@host.com:8080/p/a/t/h?a=1', true).query
  ).length
)
