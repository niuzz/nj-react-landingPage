import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import TopicList from '../views/topic-list/'
import TopicDetail from '../views/topic-detail/'

export default () => [
  <Route path="/" render={() => <Redirect to="/list" />} key="/" exact />,
  <Route path="/list" component={TopicList} key="list" exact />,
  <Route path="/detail" component={TopicDetail} key="detail" />,
]

