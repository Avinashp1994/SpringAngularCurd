import { Component, OnInit } from '@angular/core';
import { Employ } from '../employ';
import { EmployService } from '../service/employ.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updateemployee',
  templateUrl: './updateemployee.component.html',
  styleUrls: ['./updateemployee.component.css']
})
export class UpdateemployeeComponent implements OnInit {

  id: number = 0;
  employ: Employ = new Employ();
  constructor(private employService: EmployService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employService.getEmployById(this.id).subscribe(data => {
      this.employ = data;
    }, error => console.log(error));
  }

  onSubmit() {
    this.employService.updateEmploy(this.id, this.employ).subscribe(data => {
      this.goToEmployList();
    }, error => console.log(error));
  }

  goToEmployList() {
    this.router.navigate(['/display/employs']);
  }

}
