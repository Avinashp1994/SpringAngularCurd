import { Component, OnInit } from '@angular/core';
import { Employ } from '../employ';
import { ActivatedRoute,Router } from '@angular/router';
import { EmployService } from '../service/employ.service';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {

  id: number = 0;
  employ: Employ = new Employ;

  constructor(private router: Router,private route: ActivatedRoute, private employService: EmployService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employ = new Employ();
    this.employService.getEmployById(this.id).subscribe(data => {
      this.employ = data;
    });
  }

  goToEmployList() {
    this.router.navigate(['/display/employs']);
  }

}
