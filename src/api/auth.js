import { request } from './api'

export const login = params => {
  return request({
    method: 'post',
    url: 'user/login',
    params
  })
}

export const register = params => {
  return request({
    method: 'post',
    url: 'user/register',
    params
  })
}

export const resetPassword = params => {
  return request({
    method: 'put',
    url: 'user/password',
    params
  })
}

export const loginSocial = params => {
  return request({
    method: 'post',
    url: `user/login/social/${params.type}`,
    params
  })
}

export const bindPhone = params => {
  return request({
    method: 'post',
    url: `user/login/social/bind_phone`,
    params
  })
}

export const checkAuth = () => {
  const accessToken = localStorage.getItem('markartisan_access_token')
  // @TODO 服务端验证获取用户信息
  return accessToken
}
