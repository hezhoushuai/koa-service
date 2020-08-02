import koaRouter from 'koa-router'
import PublicController from '../api/PublicController'  

const router = new koaRouter()

router.get('/getCaptcha', PublicController.getCaptcha) // /b路由执行a方法

export default router // 将路由输出出去