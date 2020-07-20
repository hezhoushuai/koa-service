// 做一个combind-routes的一合操作
import combindRoutes from 'koa-combine-routers'
import demoRouter from './demoRouter'

export default combindRoutes(
    demoRouter
)