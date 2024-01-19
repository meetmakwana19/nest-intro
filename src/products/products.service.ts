import { Injectable } from "@nestjs/common";
import { Product } from "./products.model";

@Injectable()
export class ProductsService {
    //Initializing by using the Product model to be of Array type with an empty array
    products: Product[] = [];

    // Method(service) to insert a product
    insertProduct(title: string, description: string, price: number) {
        const prodId = new Date().toString();
        const newProduct = new Product(prodId, title, description, price);
        this.products.push(newProduct);
        return prodId;
    }
}