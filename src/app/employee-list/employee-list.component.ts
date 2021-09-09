import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { EmployService } from '../service/employ.service';
import {Employ} from '../employ'

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employs: Employ[] = [];

  constructor(private employService: EmployService, private router: Router) { }

  getEmployees() {
    this.employService.getEmploysList().subscribe(data => {
      this.employs = data;
      console.log(this.employs);
    });
  }

  ngOnInit(): void {
    this.getEmployees();
  }

  employeeDetails(id: number) {
    this.router.navigate(['employ-details', id]);
  }
  updateEmployee(id: number) {
    this.router.navigate(['update-employ', id]);
  }

  deleteEmployee(id: number) {
    this.employService.deleteEmploy(id).subscribe(data => {
      console.log(data);
      this.getEmployees();
    })
  }

}
