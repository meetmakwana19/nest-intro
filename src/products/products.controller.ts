import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
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
    
    @Get()
    getAllProducts(){
        return this.productsService.getProducts();
    }

    @Get(":id")
    getProduct(@Param("id") prodId: string){
        return this.productsService.getSingleProduct(prodId);
    }

    @Patch(":id")
    updateProduct(
        @Param("id") prodId: string,
        @Body("title") prodTitle: string,
        @Body("description") prodDescription: string,
        @Body("price") prodPrice: number,
    ){
        return this.productsService.updateProduct(prodId, prodTitle, prodDescription, prodPrice)
    }

    @Delete(":id")
    deleteProduct(@Param("id") prodId: string){
        return this.productsService.removeProduct(prodId);
    }
}