import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// PerfectScrollbar
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';


// Components
import { BaseReactiveFormComponent } from './base-components/base-reactive-form.component';
import { RoutingAnimationComponent } from './routing-animation/routing-animation.component';
import { PaginationComponent } from './pagination/pagination.component';
import { AlertComponent } from './alert/alert.component';



const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};


@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    PerfectScrollbarModule,
    NgbModule
  ],
  declarations: [
    RoutingAnimationComponent,
    AlertComponent,
    PaginationComponent,
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  exports: [
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    PerfectScrollbarModule,
    RoutingAnimationComponent,
    AlertComponent,
    PaginationComponent,
  ],
})
export class SharedModule { }
