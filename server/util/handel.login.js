/******************************************
 *  Author : niuzz niuzz@hotmail.com
 *  Created On : Thu Mar 15 2018
 *  File : handel.login.js
 *******************************************/
const router = require('express').Router()
const axios = require('axios')

const baseUrl = 'http://cnode.org/api/v1'

router.post('/login', function (req, res, next) {
  axios.post(`${baseUrl}/accesstoken`, {
    accesstoken: res.body.accessToken
  })
    .then(resp => {
      if (resp.status === 200 && resp.success) {
        res.session.user = {
          accessToken: req.body.accessToken,
          loginName: resp.data.loginname,
          id: resp.data.id,
          avartorUrl: resp.data.avartor_url
        }
        res.json({
          success: true,
          data: resp.data
        })
      }
    }).catch(error => {
      if (error.response) {
        res.json({
          success: false,
          data: error.response
        })
      } else {
        next(error)
      }
    })
})

module.exports = router
