import { Product } from "../../data/product/product.js";

export class ProductController {
  static getAll() {
    return Product.getAll()
  }
  static getProduct(id) {
    const product = Product.getProduct(id)

    if (!product) {
      return {
        data: null,
        error: `Продукт с идентификатором ${id} не найдено`
      }
    }
    return {
      data: product,
      error: null,
    }
  }
}