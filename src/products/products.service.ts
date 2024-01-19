import { Injectable } from "@nestjs/common";
import { Product } from "./products.model";

@Injectable()
export class ProductsService {
    //Initializing by using the Product model to be of Array type with an empty array
    // using `private` accessor so that products array is accessed only by the Products Service.
    private products: Product[] = [];

    // Method(service) to insert a product
    insertProduct(title: string, description: string, price: number) {
        const prodId = new Date().toString();
        const newProduct = new Product(prodId, title, description, price);
        this.products.push(newProduct);
        return prodId;
    }

    getProducts(){
        // returning a new array with the data of products array 
        // because arrays work as Call by reference and we dont need to send the memory reference.
        return [...this.products];
    }
}