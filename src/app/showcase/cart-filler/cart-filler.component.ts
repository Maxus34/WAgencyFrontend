import { Component, OnInit } from '@angular/core';
import { CartService, CategoryService, AlertService } from '../../_shared/services';
import { Category, ChildCategory, Product } from '../../_shared/models';


@Component({
  selector: 'app-cart-filler',
  templateUrl: 'cart-filler.component.html',
  styles: [``]
})
export class CartFillerComponent implements OnInit {

  public toggled = true;
  public isLoadingCategories: boolean;
  public allCategories: Category[];

  public requiredSumm = 0;

  public constructor (
    private categoryService: CategoryService,
    private cartService: CartService,
    private alertService: AlertService,
  ) {}

  public ngOnInit () {
    this.loadCategories();
  }


  public async loadCategories () {
    this.isLoadingCategories = true;

    try {
      this.allCategories = await this.categoryService.getAll([Category.EF_CHILDS_PRODUCTS]);
    } catch (err) {
      console.log(err);
    } finally {
      this.isLoadingCategories = false;
    }
  }

  public fillCart () {
    this.cartService.clear();
    this.clearSelectedProducts();
    this.cartService.setItems(this.getProductsForRequiredSum());
    this.alertService.success(`Выбрано товаров на сумму ${(() => {
      let sum = 0;
      this.getSelectedProducts().forEach(product => sum += product.price);
      return sum;
    })()} грн.`);
  }

  protected getProductsForRequiredSum (): Product[] {
    let total = 0;
    let needToStop = false;

    while (!needToStop) {
      needToStop = true;

      this.allCategories.forEach((category: Category) => {
        category.childs.forEach((childCat: ChildCategory) => {
          childCat.products.forEach((product: Product) => {
            if (childCat.selectedProduct) {
              if (+product.id === +childCat.selectedProduct.id) {
                return;
              }

              if ((product.price > childCat.selectedProduct.price) && (total - childCat.selectedProduct.price + product.price) <= this.requiredSumm) {
                total = total - childCat.selectedProduct.price + product.price;
                childCat.selectedProduct = product;
                needToStop = false;
              }

            } else {
              if (total + product.price <= this.requiredSumm) {
                childCat.selectedProduct = product;
                total += product.price;
                needToStop = false;
              }
            }
          });
        });
      });
    }

    return this.getSelectedProducts();
  }


  protected clearSelectedProducts () {
    this.allCategories.forEach((category: Category) => {
      category.childs.forEach((childCat: ChildCategory) => {
        childCat.selectedProduct = null;
      });
    });
  }


  protected getSelectedProducts (): Product[] {
    const products = new Array<Product>();
    this.allCategories.forEach((category: Category) => {
      category.childs.forEach((childCat: ChildCategory) => {
        if (childCat.selectedProduct){
          products.push(childCat.selectedProduct);
        }
      });
    });

    return products;
  }
}
