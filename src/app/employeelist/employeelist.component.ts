import { Component, OnInit } from '@angular/core';
import {EmployReg} from '../employreg';
import {EmployregService}  from '../service/employreg.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
  employs: EmployReg[] = [];

  constructor(private employService: EmployregService) { }

  getEmployees() {
    this.employService.getEmploysList().subscribe(data => {
      this.employs = data;
      console.log(this.employs);
    });
  }

  ngOnInit(): void {
    this.getEmployees();
  }

}
