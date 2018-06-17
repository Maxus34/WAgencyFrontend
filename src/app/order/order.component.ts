  import { Component, OnInit } from '@angular/core';
import { CartService, AlertService, ApiService } from '../_shared/services';
import { Product, IApiData } from '../_shared/models';
import { Router } from '@angular/router';

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
    .submitted-preloader {
      position: fixed;
      height: 100%;
      width: 100%;
      background-color: rgba(0,0,0,0.5);
    }
  `]
})
export class OrderComponent implements OnInit {

  public isSubmitted = false;
  public items: Product[];

  public constructor (
    private cartService: CartService,
    private apiService: ApiService,
    private alertService: AlertService,
    private router: Router,
  ) {}

  public clearCart () {
    this.cartService.clear();
    this.items = [];
    this.alertService.success('Корзина успешно очищена');
  }

  public ngOnInit () {
    this.items = this.cartService.items;
    console.log(this.items);
  }


  public async submitOrder (data: any) {
    this.isSubmitted = true;
    try {
      await this.sendOrder(data);
    } catch (err) {
      console.log(err);
    } finally {
      this.isSubmitted = false;
    }

    this.alertService.success('Заказ успешно отправлен. Ожидайте ответа', true);
    this.cartService.clear();
    this.router.navigate(['/showcase']);
  }


  public remove (product: Product) {
    this.cartService.removeFromCart(product);
    this.items = this.cartService.items;
  }

  public get totalSumm () {
    return this.cartService.totalSumm;
  }

  protected async sendOrder (data: any) {
    return this.apiService.post(
      '/cart/create-order',
      {
        'user': data,
        'qty': this.items.length,
        'sum': this.cartService.totalSumm,
        'items': this.items,
      }
    )
    .toPromise();
  }
}
