import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';

import { ProductService } from './product.service';
import { CreateProductDto } from './dto/CreateProductDto';
import { Product } from './product.model';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  addProduct(@Body() createProductDto: CreateProductDto) {
    const generatedProduct = this.productService.insertProduct(
      createProductDto.title,
      createProductDto.description,
      createProductDto.price,
    );
    return generatedProduct;
  }

  @Get()
  getAllProducts() {
    return this.productService.getProducts();
  }

  @Get(':id')
  getProduct(@Param('id') prodId: string): Product {
    return this.productService.getSingleProduct(prodId);
  }

  //   @Patch(':id')
  //   updateProduct(
  //     @Param('id') prodId: string,
  //     @Body('title') prodTitle: string,
  //     @Body('description') prodDesc: string,
  //     @Body('price') prodPrice: number,
  //   ) {
  //     this.productService.updateProduct(prodId, prodTitle, prodDesc, prodPrice);
  //     return null;
  //   }

  @Delete(':id')
  removeProduct(@Param('id') prodId: string) {
    this.productService.deleteProduct(prodId);
    return null;
  }
}
