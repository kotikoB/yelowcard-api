import { Test } from '@nestjs/testing';

import { ProductController } from '../product.controller';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { productStub } from './stub/product.stub';

jest.mock('../product.service');

describe('ProductController', () => {
  let productController: ProductController;
  let productService: ProductService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [],
      controllers: [ProductController],
      providers: [ProductService],
    }).compile();

    productController = moduleRef.get<ProductController>(ProductController);
    productService = moduleRef.get<ProductService>(ProductService);
    jest.clearAllMocks();
  });

  describe('getUser', () => {
    describe('when getProduct is called', () => {
      let product: Product;

      beforeEach(() => {
        product = productController.getProduct(productStub().id);
      });

      test('then it should call productService', () => {
        expect(productService.getSingleProduct).toBeCalledWith(
          productStub().id,
        );
      });

      test('then is should return a product', () => {
        expect(product).toEqual(productStub());
      });
    });
  });
});
