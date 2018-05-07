/******************************************
 *  Author : niuzz niuzz@hotmail.com
 *  Created On : Tue Dec 26 2017
 *  File : seller.js
 *******************************************/
import fetch from '../utils/fetch'

export function login(querier) {
  return fetch({
    url: '/sale/login',
    method: 'post',
    data: querier
  })
}

export function getCumtomerList(querier) {
  return fetch({
    url: '/sale/customer_list',
    method: 'post',
    data: querier
  })
}

export function updateUser(querier) {
  return fetch({
    url: '/sale/update_customer',
    method: 'post',
    data: querier
  })
}

export function addUser(querier) {
  return fetch({
    url: '/sale/add_customer',
    method: 'post',
    data: querier
  })
}

export function getSellerList(querier) {
  return fetch({
    url: '/admin/sale_list',
    method: 'post',
    data: querier
  })
}