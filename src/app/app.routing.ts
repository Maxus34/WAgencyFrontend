import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// Layouts
import { MainLayoutComponent } from './_layouts/main-layout.component';
import { P404Component } from './_pages/404.component';

import { IndexPageComponent } from './index';
import { ShowcasePageComponent } from './showcase';
import { OrderComponent } from './order';


export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: IndexPageComponent
      },
      {
        path: 'showcase',
        component: ShowcasePageComponent,
      },
      {
        path: 'order',
        component: OrderComponent
      }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
