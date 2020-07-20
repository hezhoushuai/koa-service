import koaRouter from 'koa-router'
import demoController from '../api/demoController'  

const router = new koaRouter()

router.get('/demo', demoController.demo) // /b路由执行a方法

export default router // 将路由输出出去