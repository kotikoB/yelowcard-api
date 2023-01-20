export class Address {
  private street: string;
  private code: number;
  private province: string;
  private city: string;

  constructor(street: string, code: number, province: string, city: string) {
    this.street = street;
    this.code = code;
    this.province = province;
    this.city = city;
  }

  getStret(): string {
    return this.street;
  }

  getCode(): number {
    return this.code;
  }

  getProvince(): string {
    return this.province;
  }

  getCity(): string {
    return this.city;
  }

  isValid(): boolean {
    let validator: Boolean;
    if (!this.street || !this.code || !this.province || !this.city) {
      return (validator = false);
    }
    return (validator = true);
  }
}
