import express from 'express'
import z from 'zod';
import { ProductController } from '../../controllers/product/controller.js';

export const router = express.Router();

router.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  res.send(JSON.stringify(ProductController.getAll()))
})

router.get('/:id', (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  const Params = z.object({
    id: z.string(),
  });

  const { success, data: { id }, z_error } =  Params.safeParse(req.params)

  if (!success) {
    return res.send(JSON.stringify({
      errorMessage: z_error,
    }))
  }

  const { data, error } = ProductController.getProduct(id);

  if (error) {
    return res.send(JSON.stringify({
      errorMessage: error,
    }))
  }
  
  return res.send(JSON.stringify(data))
})