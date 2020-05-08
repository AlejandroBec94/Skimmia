import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  form: FormGroup;

  // msbapAudioUrl = '../../../assets/music/scary_love.mp3';


  constructor(
    private _formBuilder: FormBuilder,
    private _snackBar: MatSnackBar
  ) {
  }

  ngOnInit() {
    this.form = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      postalCode: ['', [Validators.required, Validators.maxLength(5)]],
      country: ['', Validators.required]
    });
  }

  userForm(message: string, action: string) {
    this._snackBar.open('Data has been sent', 'YAS!', {
      duration: 5000,
    });
  }

}
