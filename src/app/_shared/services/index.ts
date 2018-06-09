import { GlobalService } from './global.service';
import { AlertService  } from './alert.service';
import { ApiService    } from './api.service';

import { CategoryService  } from './category.service';
import { CartService      } from './cart.service';


const SERVICES = [
  GlobalService,

  AlertService,

  ApiService,
  CategoryService,
  CartService,
];


export {
  SERVICES,

  GlobalService,
  AlertService,
  ApiService,
  CategoryService,
  CartService,
};
