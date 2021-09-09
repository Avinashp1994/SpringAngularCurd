import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup!: FormGroup;
  message: string;
  sto = false;

    //  user = '';
  

  // public register: Register[] = [];

  isFormValid = true;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.message = '';
  }
  ngOnInit() {
        //  localStorage.setItem('SessionUser',this.user);
    this.formGroup = new FormGroup({
      UserName: new FormControl('', [
        Validators.required,
           Validators.pattern(/^[a-zA-Z0-9.!#$%&â€™*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
      ]),
      Password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20)
      ])
    });

    
        // this.router.navigate(['/display']);
  }

  onSubmit() {
    console.log(this.formGroup);
    this.isFormValid = true;
    if (this.isFormValid) {
      // const user = {
      //    username: this.formGroup.value('Username'), // Username input field
      //    password: this.formGroup.value('Password') // Password input field
      //  };
      console.log('Form valid');
      // console.log(user.username + '  ' + user.password );
      console.log('Formgroup value :' + this.formGroup.value);
      this.router.navigate(['/display']);
    }
    
   

  }

  onReset() {
    this.formGroup.reset();
  }

  //  isValid(controlName) {
  //   return this.formGroup.get(controlName).invalid && this.formGroup.get(controlName).touched;
  //  }

  moveToRegister() {
    this.router.navigate(['../register'], { relativeTo: this.activatedRoute });
  }

  



}


