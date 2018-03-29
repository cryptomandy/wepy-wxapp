import { request } from './api'

/**
 * 获取首页排行列表
 * @param  {[type]} params [description]
 * @return {[type]} [description]
 */
export const getIndexList = params => {
  return request({
    method: 'get',
    url: `tag?type=${params.type}&current_page=${params.currentPage}&per_page=${params.perPage}`
  })
}
