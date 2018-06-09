import { Component, OnInit } from '@angular/core';
import { CartService } from '../_shared/services';
import { Product } from '../_shared/models';

@Component({
  selector: 'app-order',
  templateUrl: 'order.component.html',
  styles: [`
    .product-image {
      width: 50px;
      height: 50px;
    }
    .order-list {
      max-height: 400px;
    }
  `]
})
export class OrderComponent implements OnInit {

  public items: Product[];

  public constructor (
    private cartService: CartService
  ) {}

  public ngOnInit () {
    this.items = this.cartService.items;
    console.log(this.items);
  }

  public remove (product: Product) {
    this.cartService.removeFromCart(product);
    this.items = this.cartService.items;
  }

  public get totalSumm () {
    return this.cartService.totalSumm;
  }
}
