import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Category, ChildCategory, Product } from '../../_shared/models';

@Component({
  selector: 'app-category',
  templateUrl: 'category.component.html',
  styles: [`
    .category-summ{
      margin-right: 10px;
    }
    .cat-img {
      margin: 2px;
      border-radius: 50%;
    }
    .cat-name {
      margin-left: 20px;
    }
  `]
})
export class CategoryComponent {
  @Input() category: Category;

  public toggled = true;

  public recalculate () {
    setTimeout(() => {
      this.category.summ = 0;
      this.category.childs.forEach(child => {
        if (child.selectedProduct) {
          this.category.summ += child.selectedProduct.price;
        }
      });
    }, 0);
  }
}
