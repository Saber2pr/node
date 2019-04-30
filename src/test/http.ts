import { Http } from '..'

console.log(
  Http.header
    .append('Access-Control-Allow-Credentials', 'false')
    .append('Age', '233')
    .append('Allow', 'saber')
    .remove('Allow')
    .append({
      'Accept-Patch': 'patch',
      Connection: 'connect'
    })
    .remove('Connection')
    .append('Accept-Ranges', 'range')
    .clearAll()
    .append('Warning', 'warn')
    .append({
      'Cache-Control': 'co'
    })
    .getHeaders()
)
