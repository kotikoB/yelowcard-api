import { Item } from '../item/item.model';
import { Address } from '../address/adress.model';
import { Cart } from './cart.model';

describe('Story 1', () => {
  beforeEach(async () => {});

  const item: Item = new Item('123', 'Title', 'Decription', 33.0);
  const address: Address = new Address('Street', 1234, 'Province', 'City');
  const invalidAddress: Address = new Address('Street', 0, 'Province', 'City');
  const initialCart: Cart = new Cart(1, [], address);
  const invalidCart: Cart = new Cart(12, [], invalidAddress);

  describe('Story 1', () => {
    it('Should initialize cart with empty item list', () => {
      expect(initialCart.getItems().length).toEqual(0);
    });

    it('Should initialize address in cart', () => {
      expect(initialCart.getAdress().getCode()).toEqual(address.getCode());
    });
  });

  describe('Story 2', () => {
    it('Should validate zero total', () => {
      expect(initialCart.isValid()).toBe(false);
    });

    it('Should validate empty list', () => {
      expect(invalidCart.isValid()).toBe(false);
    });

    it('Should validate invalid address', () => {
      expect(invalidCart.getAdress().isValid()).toBe(false);
    });
  });
});
