import { Address } from 'src/address/adress.model';
import { Item } from 'src/item/item.model';

export class Cart {
  private total: number;
  private items: Item[];
  private address: Address;

  constructor(total: number = 0, items: Item[] = [], address: Address) {
    this.total = total;
    this.items = items;
    this.address = address;
  }

  getItems(): Item[] {
    return this.items;
  }

  getAdress(): Address {
    return this.address;
  }

  getTotal(): number {
    return this.total;
  }

  validate(): boolean {
    if (this.total === 0) {
      return false;
    }
    if (this.items.length === 0) {
      return false;
    }
    if (this.address.city === '') {
      return false;
    }
    return true;
  }
}
