import { Component, OnInit, OnDestroy } from '@angular/core';

import { User } from '../_shared/models';

import { Subject } from 'rxjs';


@Component({
  selector: 'app-layout',
  templateUrl: './main-layout.component.html',
})
export class MainLayoutComponent implements OnInit, OnDestroy {

  public isNavbarCollapsed = true;

  protected componetDestroyed = new Subject<void>();

  public constructor(

  ) {}


  public ngOnInit() {

  }


  public ngOnDestroy() {
    this.componetDestroyed.next();
    this.componetDestroyed.complete();
  }
}
