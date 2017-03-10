import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { ValidateId } from '../services/idValidator';
import { Talk2dbService } from '../services/talk2db.service';
import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  ContactForm: FormGroup;

    media = [
      {src: '../../assets/Images/email.png', href: 'mailto:quratulann_iqbal@hotmail.com', class: 'ion-social-facebook', color: 'lightblue'},
      {src: '../../assets/Images/github.png', href: 'https://github.com/AnnyIqbal', class: 'ion-social-github', color: 'lightgreen'},
      {src: '../../assets/Images/linkedin.png', href: 'https://pk.linkedin.com/in/qurat-ul-ann-iqbal-aa4a4938', class: 'ion-social-linkedin', color: 'lightpink'},
      {src: '../../assets/Images/facebook.png', href: 'https://www.facebook.com/quratulann.iqbal', class: 'ion-email', color: '#DDBDF1'}
    ];

  constructor(
    private route: Router, 
    private formBuilder: FormBuilder, 
    public db: Talk2dbService,
    public snackBar: MdSnackBar
    ) {
     this.ContactForm = this.formBuilder.group({
        name:  ['', Validators.compose([ Validators.required, Validators.maxLength(20), Validators.minLength(3) ])],
        email: ['', Validators.compose([ ValidateId, Validators.required ])],
        msg:   ['', Validators.compose([ Validators.required ])]
     });
  }

  ngOnInit() {
  }

  sendMsg(formValue) {
    if(formValue.valid) {
      console.log('@@@@@@@@@@@@@@@@', formValue);
      // this.db.submitMsg(formValue);
      this.snackBar.open('Thank you! I\'ll get back to you soon.', '' , {
        duration: 2000,
      });
    }
    else {
      this.snackBar.open('Form is invalid!','Error!', {
        duration: 2000,
      });
    }
  }
}
