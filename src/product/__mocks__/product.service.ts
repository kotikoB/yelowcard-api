import { productStub } from '../test/stub/product.stub';

export const ProductService = jest.fn().mockReturnValue({
  getProducts: jest.fn().mockReturnValue([productStub()]), // mockResolvedValue
  getSingleProduct: jest.fn().mockReturnValue(productStub()),
});
