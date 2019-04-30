import { Http } from '..'

console.log(
  Http.header
    .append('Access-Control-Allow-Credentials', 'false')
    .append('Age', '233')
    .append('Allow', 'saber')
    .remove('Allow')
    .getHeaders()
)
