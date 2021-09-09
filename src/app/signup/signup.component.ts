import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import { EmployregService} from '../service/employreg.service';
import { EmployReg } from '../employreg';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
   providers: [EmployregService]
})
export class SignupComponent implements OnInit {
  regform!: FormGroup;
  isFormValid = true;

  employ: EmployReg = new EmployReg();



  constructor(private router: Router, private fb: FormBuilder, private empservice: EmployregService) { }

  saveEmploy() {
     this.empservice.createEmploy(this.employ).subscribe(data => {
       console.log(data);
       this.goToEmployList();
     }, error => console.log(error));
  }


  goToEmployList(){
    this.router.navigate(['/login']);
  }

   onSubmit() {
    console.log(this.regform.value);
     this.saveEmploy();

   }

  ngOnInit(): void {

        this.regform = this.fb.group({
          firstname: new FormControl('', [
            Validators.required,
          ]),
          lastname: new FormControl('', [
            Validators.required,
          ]),
          dob: new FormControl('', [
            Validators.required,
          ]),
          gender: new FormControl('', [
            Validators.required,
          ]),
          email: new FormControl('', [
            Validators.required,
              Validators.pattern(/^[a-zA-Z0-9.!#$%&â€™*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
          ]),
          mobile: new FormControl('', [
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
