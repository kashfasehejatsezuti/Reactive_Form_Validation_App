import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css',
})
export class ReactiveFormComponent {
  personInfoForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.maxLength(5),
    ]),
    lastName: new FormControl('', [Validators.required]),
    userName: new FormControl('', [Validators.required, Validators.email]),
    city: new FormControl(''),
    state: new FormControl(''),
    zip: new FormControl(''),
    terms: new FormControl('', [Validators.required]),
  });
  formValue: any;
  onSubmit() {
    this.formValue = this.personInfoForm.value;
  }

  onReset() {
    this.personInfoForm.reset();
  }
}
