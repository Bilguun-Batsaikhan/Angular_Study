import { Component } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { ReactiveFormComponent } from '../reactive-form/reactive-form.component';

@Component({
  selector: 'app-form-container',
  imports: [FormComponent, ReactiveFormComponent],
  templateUrl: './form-container.component.html',
  styleUrl: './form-container.component.css',
})
export class FormContainerComponent {}
