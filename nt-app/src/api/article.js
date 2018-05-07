/**
 * Created by niuzz on 17/10/1.
 */
import fetch from '../utils/fetch'

/**
 * 文章列表
 * @param querier URLSearchParams对象
 */
export function fetchArticleList (querier) {
  return fetch({
    url: '/article/article_list',
    method: 'post',
    data: querier
  })
}
/**
 * 修改文章
 * @param querier
 */
export function updateArticle (querier) {
  return fetch({
    url: '/article/update_article',
    method: 'post',
    data: querier
  })
}
/**
 * 获取分类
 */
export function fetchCategory (querier) {
  return fetch({
    url: '/article/get_category',
    method: 'post',
    data: querier
  })
}
/**
 * 发布文章
 */
export function releaseArticle (querier) {
  return fetch({
    url: '/article/release',
    method: 'post',
    data: querier
  })
}
/**
 * 上传图片
 */
export function uploadImage(querier) {
  return fetch({
    url: '/article/upload_image',
    method: 'post',
    data: querier
  })
}
/**
 * 取提现文章
 * @param {*} querier
 */
export function withdrawArticle(querier) {
  return fetch({
    url: '/article/withdraw_article',
    method: 'post',
    data: querier
  })
}


