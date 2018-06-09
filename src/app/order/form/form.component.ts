import { Component, Input, Output } from '@angular/core';
import { FormGroup, Validators, FormBuilder, AbstractControl, ValidatorFn } from '@angular/forms';

import { BaseReactiveFormComponent } from '../../_shared/base-components/base-reactive-form.component';
import { User } from '../../_shared/models';

import { Subject } from 'rxjs';


@Component({
  selector: 'app-order-form',
  templateUrl: 'form.component.html',
})
export class OrderFormComponent extends BaseReactiveFormComponent<User> {
  public initForm () {
    this.formGroup = this.fB.group({
      name:       ['', Validators.compose([Validators.required, Validators.maxLength(100)])],
      surname:    ['', Validators.compose([Validators.required, Validators.maxLength(100)])],
      patronymic: ['', Validators.compose([Validators.required, Validators.maxLength(100)])],

      email: ['', Validators.compose([Validators.required, Validators.email, Validators.maxLength(100)])],
    });
  }

  public initFormErrors () {
    this.formErrors = {
      required: 'Поле обязательно к заполнению.',

      name:       {
        maxlength: 'Длинна поля  не должна превышать 100 символов.'
      },
      surname:    {
        maxlength: 'Длинна поля не должна превышать 100 символов.'
      },
      patronymic: {
        maxlength: 'Длинна поля не должна превышать 100 символов.'
      },
      email: {
        maxlength: 'Длинна поля не должна превышать 255 символов.',
        email: 'Введите корректный адрес эл. почты.'
      },
    };
  }
}
