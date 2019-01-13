/*
 * @Author: AK-12 
 * @Date: 2018-11-26 15:39:21 
 * @Last Modified by: AK-12
 * @Last Modified time: 2019-01-13 15:59:47
 */
let Ajax = (method, url, value) => new Promise((resolve, reject) => {
  let xhr = new XMLHttpRequest()
  xhr.open(method, url, true)
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        resolve(xhr.responseText)
      } else {
        reject(xhr.status)
      }
    }
  }
  xhr.send(value)
})

Ajax('GET', '../data/test2').then(res => document.write(res))