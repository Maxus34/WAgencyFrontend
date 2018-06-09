import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { Category, ChildCategory, Product } from '../../_shared/models';
import { CartService } from '../../_shared/services';

@Component({
  selector: 'app-category-child',
  templateUrl: 'category-child.component.html',
  styles: [`
    .product-image {
      width: 50px;
      height: 50px;
    }
    .products-list {
      position: relative;
      max-height: 250px;
    }
    .not-available{
      background-color: rgba(255, 0, 0, 0.1);
    }
  `]
})
export class CategoryChildComponent implements OnInit {
  @Input()  childCategory: ChildCategory;
  @Output() onChange = new EventEmitter<void>();

  public constructor (
    private cartService: CartService,
  ) {}


  public ngOnInit () {
    this.findSelectedItemsInCartItems(this.cartService.items);
  }


  public select(product: Product) {
    this.childCategory.selectedProduct = product;
    this.cartService.addToCart(product);
    this.onChange.next();
  }


  public cancel() {
    this.cartService.removeFromCart(this.childCategory.selectedProduct);
    this.childCategory.selectedProduct = null;
    this.onChange.next();
  }


  protected findSelectedItemsInCartItems (cartItems: Product[]){
    cartItems.forEach(item => {
      if (item.catId === this.childCategory.id) {
        this.select(item);
      }
    });
  }
}
