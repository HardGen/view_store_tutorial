import { Product as ProductType } from '../../schema/product/product.js';


export const product = ProductType.parse({
  id: '1',
  name: 'Product 1',
  description: 'некоторое описание'
})

const PRODUCT_COUNT = process.env.PRODUCTS_COUNT ?? 5;

export const products = [];

for (let i = 0; i < PRODUCT_COUNT; i++) {
  products.push(
    ProductType.parse({
      id: (i+1).toString(),
      name: `Product ${i + 1}`,
      description: `Некоторое описание ${i + 1}го товара`
    })
  )
}

export class Product {
  static getAll() {
    return products;
  }
  static getProduct(id) {
    return products.find(i => i.id === id);
  }
}