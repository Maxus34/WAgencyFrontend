import { NgModule          } from '@angular/core';
import { NgbModule         } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule     } from '@angular/platform-browser';
import { HttpModule        } from '@angular/http';

// Modules
import { SharedModule     } from './_shared/shared.module';
import { AppRoutingModule } from './app.routing';

// Layouts
import { MainLayoutComponent } from './_layouts/main-layout.component';
import { P404Component } from './_pages/404.component';

// Components
import { AppComponent  } from './app.component';
import { INDEX_PAGE    } from './index';
import { SHOWCASE_PAGE } from './showcase';
import { ORDER_PAGE    } from './order';

import { SERVICES  } from './_shared/services';

// RxJs
import 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/catch';


@NgModule({
   imports: [
      BrowserModule,
      HttpModule,
      NgbModule.forRoot(),
      SharedModule,
      AppRoutingModule,
   ],
   declarations: [
      AppComponent,
      INDEX_PAGE,
      SHOWCASE_PAGE,
      ORDER_PAGE,
      MainLayoutComponent,
      P404Component
   ],
   providers: [
    SERVICES,
  ],
  entryComponents: [
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
