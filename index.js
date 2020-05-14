const Koa = require('koa')
const koaJson = require('koa-json')
const bodyParser = require('koa-bodyparser')
const path = require('path')
const http = require('http')
const fs = require('fs')
const async = require('async')
const Static = require('koa-static')
const Router = require('koa-router')

const router = new Router()

const app = new Koa()
app.use(Static('.'))

router.get('/test', (ctx, next) => {
  ctx.body = 'Hello World!'
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(8090)
console.log('======================================')
console.log('服务启动中')
console.log('======================================')
