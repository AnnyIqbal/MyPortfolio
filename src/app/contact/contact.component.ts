import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { ValidateId } from '../services/idValidator';
import { Talk2dbService } from '../services/talk2db.service';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  email: string = '../../assets/Images/email-invert.png';
  github: string = '../../assets/Images/github-invert.png';
  linkedin: string = '../../assets/Images/linkedin-invert.png';
  facebook: string = '../../assets/Images/fb-invert.png';

  ContactForm: FormGroup;

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
    // if (formValue.valid) {
      console.log('@@@@@@@@@@@@@@@@', formValue);
      this.db.submitMsg(formValue);
      this.snackBar.open('Thank you! I\'ll get back to you soon.', '' , {
        duration: 2000,
      });
    }
  //   else {
  //     this.snackBar.open('Form is invalid!', 'Error!', {
  //       duration: 2000,
  //     });
  //   }
  // }
}
