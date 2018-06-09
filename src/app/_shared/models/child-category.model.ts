import { BaseModel } from './base.model';
import { Product } from './product.model';

export class ChildCategory extends BaseModel {
  public name: string;
  public products ?: Product[];

  public selectedProduct ?: Product;

  public constructor (data: any) {
    super(data);
    this.name = data.name;
    this.createEFAttributes(data);
  }

  protected createEFAttributes (data: any) {
    if (data.products) {
      this.products = [];
      data.products.forEach(productData => this.products.push(new Product(productData)));
    }
  }
}
