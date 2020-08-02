// 做一个combind-routes的一合操作
import combindRoutes from 'koa-combine-routers'
import PublicRouter from './PublicRouter'

export default combindRoutes(
    PublicRouter
)