import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Category, IApiData } from '../models/index';

import { BaseService   } from './base.service';

import { ApiService    } from './api.service';

import { Observable, Subject } from 'rxjs';



@Injectable()
export class CategoryService extends BaseService<Category> {
  protected readonly modelClass = Category;
  protected readonly apiPath = '/category';
}
