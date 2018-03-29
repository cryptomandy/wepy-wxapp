import { request } from './api'

/**
 * 获取数据集列表
 * @param  {[type]} params [description]
 * @return {[type]} [description]
 */
export const fetchDatasetsList = params => {
  let url = `datasets?current_page=${params.currentPage}&per_page=${params.perPage}`

  if (params.keyword) {
    url += `&keyword=${params.keyword}`
  }

  if (params.tagId) {
    url += `&tag_id=${params.tagId}`
  }

  if (params.userId) {
    url += `&user_id=${params.userId}`
  }

  if (params.orderField) {
    url += `&order_field=${params.orderField}`
  }

  return request({
    method: 'get',
    url: url
  })
}

/**
 * 获取热门数据集
 * @param  {[type]} params [description]
 * @return {[type]} [description]
 */
export const fetchDatasetsHot = params => {
  return request({
    method: 'get',
    url: `datasets/hot`,
    params
  })
}

/**
 * 获取数据集详情
 * @param  {[type]} params [description]
 * @return {[type]} [description]
 */
export const fetchDatasetsItem = params => {
  return request({
    method: 'get',
    url: `datasets/${params.datasetsId}?display=${params.display}`
  })
}
