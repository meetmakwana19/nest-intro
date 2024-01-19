import { Body, Controller, Post } from "@nestjs/common";
import { ProductsService } from "./products.service";

@Controller("products")
export class ProductsController {
    // adding `private` accessor so that equally named properties are created automatically for this class.
    // `readonly` lets you never replace the existing product service with the new one.
    constructor(private readonly productsService: ProductsService){

    }
    @Post()
    addProduct(
        // @Body() completeBody: {title: string, description: string, price: number},
        @Body("title") prodTitle: string,
        @Body("description") prodDescription: string,
        @Body("price") prodPrice: number,
    ): any {
        const generatedResponse = this.productsService.insertProduct(prodTitle, prodDescription, prodPrice);

        return {
            id: generatedResponse
        };

    }
    
}