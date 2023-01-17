import { Product } from 'src/product/product.model';

export const productStub = (): Product => {
  return {
    id: '12345',
    title: 'Test title',
    description: 'Test Desc',
    price: 35,
  };
};
