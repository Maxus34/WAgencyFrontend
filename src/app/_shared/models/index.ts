import { IApiData } from './i.api-data';
import { iJWT     } from './i.jwt';
import { ApiError } from './api-error.model';

import { BaseModel     } from './base.model';
import { User          } from './user.model';
import { Category      } from './category.model';
import { ChildCategory } from './child-category.model';
import { Product       } from './product.model';


const MODELS = [
  ApiError,
  BaseModel,
  User,
  Category,
  ChildCategory,
  Product,
];


export {
  MODELS,

  IApiData,
  iJWT,
  ApiError,
  BaseModel,
  User,
  Category,
  ChildCategory,
  Product,
};
