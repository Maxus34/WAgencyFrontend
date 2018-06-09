import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Category, Product } from '../models';

@Injectable()
export class CartService {

  protected LS_KEY = 'cart';

  public items: Product[];
  public totalSumm = 0;

  public constructor (
    private apiService: ApiService,
  ) {

    this.items = this.getCartFromLS() || [];
    this.recalculateTotalSum();
  }


  public addToCart (product: Product) {
    this.items.push(product);
    this.saveCartToLS();
    this.recalculateTotalSum();
  }


  public removeFromCart (product: Product) {
    this.items = this.items.filter(item => item.id !== product.id);
    this.recalculateTotalSum();
    this.saveCartToLS();
  }


  protected recalculateTotalSum () {
    this.totalSumm = 0;
    this.items.forEach(item => {
      this.totalSumm += item.price;
    });
  }


  protected saveCartToLS () {
    localStorage.setItem(this.LS_KEY, JSON.stringify(this.items));
  }


  protected getCartFromLS () {
    return JSON.parse(localStorage.getItem(this.LS_KEY));
  }
}
