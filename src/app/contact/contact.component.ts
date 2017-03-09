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

    media = [
      {src: '../../assets/Images/email.png', href: 'mailto:quratulann_iqbal@hotmail.com', class: 'ion-social-facebook', color: 'lightblue'},
      {src: '../../assets/Images/github.png', href: 'https://github.com/AnnyIqbal', class: 'ion-social-github', color: 'lightgreen'},
      {src: '../../assets/Images/linkedin.png', href: 'https://pk.linkedin.com/in/qurat-ul-ann-iqbal-aa4a4938', class: 'ion-social-linkedin', color: 'lightpink'},
      {src: '../../assets/Images/facebook.png', href: 'https://www.facebook.com/quratulann.iqbal', class: 'ion-email', color: '#DDBDF1'}
    ];

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
