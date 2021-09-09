import { Component, OnInit } from '@angular/core';
import { EmployService } from '../service/employ.service';
import {Router} from '@angular/router';
import {Employ} from '../employ';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  regform!: FormGroup;
  isFormValid = true;
  employ: Employ = new Employ();

  constructor(private employService: EmployService, private router: Router, private fb: FormBuilder) { }

  
  saveEmploy() {
    this.employService.createEmploy(this.employ).subscribe(data => {
      console.log(data);
      this.goToEmployList();
    }, error => console.log(error));
  }

  goToEmployList() {
    this.router.navigate(['/login']);
  }

  onSubmit() {
    this.isFormValid = true;
    if (this.isFormValid) {
      // const user = {
      //    username: this.formGroup.value('Username'), // Username input field
      //    password: this.formGroup.value('Password') // Password input field
      //  };
      console.log('Form valid');
    
    console.log(this.employ);
      // console.log('Formgroup value :' + this.formGroup.value);
    this.saveEmploy();
    // this.goToEmployList();
    }
  }

   ngOnInit(): void {
     this.regform = this.fb.group({
       id: new FormControl('', [
         Validators.required,
       ]),
       emailid: new FormControl('', [
         Validators.required,
         Validators.pattern(/^[a-zA-Z0-9.!#$%&â€™*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
       ]),
       firstname: new FormControl('', [
         Validators.required,
       ]),
       lastname: new FormControl('', [
         Validators.required,
       ]),
       pass: new FormControl('', [
         Validators.required,
         Validators.minLength(8),
         Validators.maxLength(20)
       ])


     });


 }
}
