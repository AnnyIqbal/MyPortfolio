import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { ValidateId } from '../services/idValidator';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  ContactForm: FormGroup;

  constructor(private route: Router, private formBuilder: FormBuilder) {
     this.ContactForm = this.formBuilder.group({
        name:  ['', Validators.compose([ Validators.required, Validators.maxLength(20), Validators.minLength(3) ])],
        email: ['', Validators.compose([ ValidateId, Validators.required ])],
        msg:   ['', Validators.compose([ Validators.required ])]
     });
  }

  ngOnInit() {
  }

  sendMsg(formValue) {
    console.log(formValue);
  }
}
