import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'fit-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', [Validators.required]);
  textArea = new FormControl('', [Validators.required]);

  constructor() {}

  ngOnInit(): void {}

  get emailError() {
    if (this.email.hasError('required')) {
      return 'Email is required';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  get nameError() {
    if (this.name.hasError('required')) {
      return 'Name is required';
    }
  }

  get textAreaError() {
    if (this.textArea.hasError('required')) {
      return 'Enter a value';
    }
  }

  get isDisabled() {
    if (
      !this.name.touched ||
      this.name.errors ||
      !this.email.touched ||
      this.email.errors ||
      !this.textArea.touched ||
      this.textArea.errors
    ) {
      return true;
    }
    return false;
  }

  onSubmit(): void {
    // TODO: I believe there is a better way to handle form groups and data... see FormGroup
    console.log(`Name: ${this.name.value}`);
    console.log(`Email ${this.email.value}`);
    console.log(`Feedback ${this.textArea.value}`);
  }
}
