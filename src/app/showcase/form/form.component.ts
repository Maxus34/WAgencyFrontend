import { Component, OnInit } from '@angular/core';

import { CategoryService, CartService } from '../../_shared/services';
import { Category, ChildCategory, Product } from '../../_shared/models';

import { Subject } from 'rxjs';


@Component({
  selector: 'app-calculation-form',
  templateUrl: 'form.component.html',
})
export class FormComponent implements OnInit {

  public allCategories: Category[];
  public isLoadingCategories: boolean;


  public constructor (
    private categoryService: CategoryService,
    public cartService: CartService,
  ) {}


  public ngOnInit () {
    this.loadCategories();
  }


  protected async loadCategories () {
    this.isLoadingCategories = true;

    try {
      this.allCategories = await this.categoryService.getAll([Category.EF_CHILDS_PRODUCTS]);
    } catch (err) {
      console.log(err);
    } finally {
      this.isLoadingCategories = false;
    }
  }
}
