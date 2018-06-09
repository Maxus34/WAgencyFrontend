import { BaseModel } from './base.model';
import { ChildCategory } from './child-category.model';

export class Category extends BaseModel {
  public static readonly EF_CHILDS_PRODUCTS = 'childs.products';

  public name: string;
  public imageUrl: string;

  public summ = 0;

  public childs ?: ChildCategory[];

  public constructor (data: any) {
    super(data);
    this.name = data.name;
    this.imageUrl = data.img;
    this.createEFAttributes(data);
  }

  protected createEFAttributes (data: any) {
    if (data.childs) {
      this.childs = [];
      data.childs.forEach(childData => this.childs.push(new ChildCategory(childData)));
    }
  }
}
