import { Stock } from '../stock.model';

export class Product {
  constructor (
    public name: string,
    public categoryId: number,
    public price: number,
    public modelNumber: string,
    public description: string,
    public stock: Stock[]
    ) {

  }
}
