import Koa from 'koa';
import React from 'react'
import {renderToString} from 'react-dom/server'

const app = new Koa()
app.use(ctx => {
	ctx.body = 'hello'
})

app.listen(7000)

console.log('ssr is started at 7000');