import express from 'express'
import { router as productRouter } from './routers/product/routes.js'

const app = express()
const port = process.env.PORT

app.use('/products', productRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})