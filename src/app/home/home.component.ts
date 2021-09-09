import { Component, OnInit, Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  num: number = 0;
  searchText="";
  products: {
    id: string;
    title: string;
    price: number;
    stock: number;
  }[] = [];

  constructor() { }

  @Input() greetmessage! :string;
  @Output() valuChange = new EventEmitter();
  counter=0;

  valuChanged(){
    this.counter=this.counter+1;
    this.valuChange.emit(this.counter);
  }


  name="Avinash Pujari";
  product ={
    title:'cricket bat',
    price:500
  }

  btnHeight=100;
  btnWidth=100;

  addProduct(){
    console.log("Laptop");
  }


  getProducts() {
    return [
      { 'id': '1', 'title': 'Screw Driver', 'price': 400, 'stock': 15 },
      { 'id': '2', 'title': 'Nut Volt', 'price': 10, 'stock': 35 },
      { 'id': '3', 'title': 'Resistor', 'price': 80, 'stock': 100 },
      { 'id': '4', 'title': 'Capacitor', 'price': 80, 'stock': 3 },
      { 'id': '5', 'title': 'Adapter', 'price': 1000, 'stock': 5 }
    ]
  }

  ngOnInit(): void {
     this.products = this.getProducts();
  }

  id=null;
  public hdate = new Date();
  public name1 ="Avinash";
  public message="Welcome to Angular";
  public characters=["Krishna","Avinash","Amit","Vishal","Ketan"];
  public person={
    fname:'Radhe',
    lname: 'Krishna'
  }
  public val = 5.678;


}
