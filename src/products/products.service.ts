import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './products.model';

@Injectable()
export class ProductsService {
  //Initializing by using the Product model to be of Array type with an empty array
  // using `private` accessor so that products array is accessed only by the Products Service.
  private products: Product[] = [];

  // Method(service) to insert a product
  insertProduct(title: string, description: string, price: number) {
    const prodId = Math.floor(Math.random() * 10 ** 5).toString();
    const newProduct = new Product(prodId, title, description, price);
    this.products.push(newProduct);
    return prodId;
  }

  getProducts() {
    // returning a new array with the data of products array
    // because arrays work as Call by reference and we dont need to send the memory reference.
    return [...this.products];
  }

  getSingleProduct(productId: string) {
    const [product, index] = this.findProduct(productId);
    return { product };
  }

  updateProduct(
    productId: string,
    title: string,
    description: string,
    price: number,
  ) {
    const [product, index] = this.findProduct(productId);
    const updatedProduct = {...product};
    if(title){
        updatedProduct.title = title;
    }
    if(description){
        updatedProduct.description = description;
    }
    if(price){
        updatedProduct.price = price;
    }
    this.products[index] = updatedProduct;
    return updatedProduct;
  }

  private findProduct(id: string): [Product, number] {
    const productIndex = this.products.findIndex((prod) => prod.id === id);
    const product = this.products[productIndex];
    if (!product) {
      // NestJS will automatically throw a 404 error
      throw new NotFoundException('Product not found.');
    }
    return [product, productIndex];
  }
}
