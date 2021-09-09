import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angularp';
  message="I am Parent";
  childMessage="I am Passes message to child component";


  constructor(private router:Router){}

  // back(): void{
  //   this.router.navigate(['/']);
  // }

  displayCounter(count:any){
     console.log(count);
  }

 

  ngOinit(){
    // console.log(this.service.getData());
    // alert(this.service.getData());

  }
}
