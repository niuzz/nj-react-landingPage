/**
 * Created by niuzz on 17/10/3.
 */
import fetch from '../utils/fetch'
/**
 * 取媒体列表
 * @param querier
 */
export function fetchMedia(querier) {
  return fetch({
    url: '/media/get_media',
    method: 'post',
    data: querier
  })
}
/**
 * 取收藏媒体列表
 * @param {*} params 
 */
export function getCollection(params) {
  return fetch({
    url: '/media/collection_list',
    method: 'post',
    data: params
  })
}
/**
 * 收藏媒体
 * @param {*} params 
 */
export function collection(params) {
  return fetch({
    url: '/media/collection',
    method: 'post',
    data: params
  })
}
/**
 * 取消收藏
 * @param {*} params 
 */
export function delCollction(params) {
  return fetch({
    url: '/media/del_collection',
    method: 'post',
    data: params
  })
}
/**
 * 更新媒体
 * @param {*} params 
 */
export function updateMedia(params) {
  return fetch({
    url: '/media/update_media',
    method: 'post',
    data: params
  })
}
/**
 * 添加媒体
 * @param {*} params 
 */
export function addMedia(params) {
  return fetch({
    url: '/media/add_media',
    method: 'post',
    data: params
  })
}