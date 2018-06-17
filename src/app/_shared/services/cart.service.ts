import { Injectable, EventEmitter } from '@angular/core';
import { ApiService } from './api.service';
import { Category, Product } from '../models';


@Injectable()
export class CartService {

  protected LS_KEY = 'cart';

  public onChanged = new EventEmitter<void>();

  public items: Product[];
  public totalSumm = 0;

  public constructor (
    private apiService: ApiService,
  ) { this.init(); }


  public init () {
    this.items = this.getCartFromLS() || [];
    this.recalculateTotalSum();
  }


  public clear () {
    this.items = [];
    this.totalSumm = 0;
    this.saveCartToLS();
    this.onChanged.next();
  }


  public setItems (items: Product[]) {
    this.items = items;
    this.recalculateTotalSum();
    this.saveCartToLS();
    this.onChanged.next();
  }


  public addToCart (product: Product) {
    this.addProduct(product);
    this.saveCartToLS();
    this.recalculateTotalSum();
  }




  public removeFromCart (product: Product) {
    this.items = this.items.filter(item => item.id !== product.id);
    this.recalculateTotalSum();
    this.saveCartToLS();
  }

  protected addProduct (product: Product) {
    if (this.items.find(item => +item.id === +product.id))
      return;

    this.items.push(product);
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
