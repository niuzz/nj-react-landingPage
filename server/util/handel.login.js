/******************************************
 *  Author : niuzz niuzz@hotmail.com
 *  Created On : Thu Mar 15 2018
 *  File : handel.login.js
 *******************************************/
const router = require('express').Router()
const axios = require('axios')

const baseUrl = 'https://cnodejs.org/api/v1'

router.post('/login', function (req, res, next) {
  axios.post(`${baseUrl}/accesstoken`, {
    accesstoken: req.body.accessToken,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
    .then(resp => {
      if (resp.status === 200 && resp.data.success) {
        req.session.user = {
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
