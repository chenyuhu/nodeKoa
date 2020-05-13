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

app.listen(3001)
