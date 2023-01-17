import { Address } from '../address/adress.model';
import { Cart } from './cart.model';

describe('Describe story 1', () => {
  beforeEach(async () => {});

  const address: Address = new Address('Street', 1234, 'Province', 'City');
  const invalidAddress: Address = new Address('Street', 1234, 'Province', '');
  const cart: Cart = new Cart(0, [], address);
  const cartEmptyList: Cart = new Cart(12, [], invalidAddress);

  describe('Story 1', () => {
    it('Should initialize cart with empty item list', () => {
      expect(cart.getItems().length).toEqual(0);
    });

    it('Should initialize address in cart', () => {
      expect(cart.getAdress().code).toEqual(address.code);
    });
  });

  describe('Story 2', () => {
    it('Should validate zero total', () => {
      expect(cart.validate()).toBe(false);
    });

    it('Should validate empty list', () => {
      expect(cartEmptyList.validate()).toBe(false);
    });

    it('Should validate invalid address', () => {
      expect(cartEmptyList.validate()).toBe(false);
    });
  });
});
