// const Koa = require('koa')
// const path = require('path')
// const router = require('./routes/routes')
// const koaBody = require('koa-body')
// const cros = require('@koa/cors') // 用于处理跨域的
// const helmet = require('koa-helmet') // 用于请求安全的
// const koaStatic = require('koa-static') // koa处理静态资源

import Koa from 'koa'
import path from 'path'
import router from './routes/routes'
import koaBody from 'koa-body'
import cros from '@koa/cors'
import helmet from 'koa-helmet'
import koaStatic from 'koa-static'
import compose from 'koa-compose' // 整合所有的koa中间件
import jsonUtil from 'koa-json'
import compress from 'koa-compress' // 压缩中间件

const isDev = process.env.NODE_ENV === 'development'
const app = new Koa()

/**
 * 使用koa-compose进行整合中间件
*/
const middleware = compose([
    koaBody(),
    koaStatic(path.join(__dirname, '../public')),
    cros(),
    jsonUtil({pretty: false, param: 'pretty'}),
    helmet()
])

// 如果不是开发模式就对中间件进行一个压缩操作
if (!isDev) {
    app.use(compress())
}

app.use(middleware)
    .use(router())

app.listen(3000)