import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  form: FormGroup;

  constructor(
    private _formBuilder: FormBuilder
  ) {
  }

  ngOnInit() {
    this.form = this._formBuilder.group({
      company: [
        {
          value: 'Google',
          disabled: true
        }, Validators.required
      ],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      address2: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      postalCode: ['', [Validators.required, Validators.maxLength(5)]],
      country: ['', Validators.required]
    });
  }

}
