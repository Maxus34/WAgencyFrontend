import { Component, OnInit } from '@angular/core';

import { CategoryService, CartService } from '../_shared/services';
import { Category, ChildCategory, Product } from '../_shared/models';

import { Subject } from 'rxjs';


@Component({
  selector: 'app-showcase',
  templateUrl: 'showcase-page.component.html',
})
export class ShowcasePageComponent {}
