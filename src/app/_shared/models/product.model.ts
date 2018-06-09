import { BaseModel } from './base.model';

export class Product extends BaseModel {
  public static readonly $TYPE_PREMIUM   = 1;
  public static readonly $TYPE_COMMON    = 2;
  public static readonly $TYPE_BUDGETARY = 3;

  public name: string;
  public price: number;
  public type: number;
  public catId: number;
  public imageUrl: string;
  public available: boolean;

  public products ?: any[];

  public constructor (data: any) {
    super(data);
    this.name  = data.name;
    this.price = data.price;
    this.catId = data.catId;
    this.type  = data.type;
    this.available = data.available;
    this.imageUrl  = data.img;
  }


  public get typeLabel () {
    switch (this.type) {
      case Product.$TYPE_PREMIUM:   return 'Премиальный';
      case Product.$TYPE_COMMON:    return 'Стандарт';
      case Product.$TYPE_BUDGETARY: return 'Бюджет';
    }
  }
}
