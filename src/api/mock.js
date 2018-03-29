const getUrlApi = url => {
  return url ? url.split('?')[0] : window.location.search.slice(0)
}

/*
const getUrlQuery = url => {
  const d = decodeURIComponent
  let queryString = url ? url.split('?')[1] : window.location.search.slice(1)
  const obj = {}
  if (queryString) {
    queryString = queryString.split('#')[0] // eslint-disable-line
    const arr = queryString.split('&')
    for (let i = 0; i < arr.length; i += 1) {
      const a = arr[i].split('=')
      let paramNum
      const paramName = a[0].replace(/\[\d*\]/, (v) => {
        paramNum = v.slice(1, -1)
        return ''
      })
      const paramValue = typeof (a[1]) === 'undefined' ? true : a[1]
      if (obj[paramName]) {
        if (typeof obj[paramName] === 'string') {
          obj[paramName] = d([obj[paramName]])
        }
        if (typeof paramNum === 'undefined') {
          obj[paramName].push(d(paramValue))
        } else {
          obj[paramName][paramNum] = d(paramValue)
        }
      } else {
        obj[paramName] = d(paramValue)
      }
    }
  }
  return obj
}
*/

const mock = {
  collection: [
    
  ],
  // 数据集列表
  datasets: [
    
  ],
  
}

/**
 * 模拟接口返回结果
 *
 * @returns
 */
const request = (url, data, method) => {
  const apiName = getUrlApi(url)
  const result = {
    code: 1,
    message: 'SUCCESS',
    data: mock[apiName]
  }
  return result
}

/**
 * 这里导出相应模拟数据的函数名
 */

export {
  request
}
