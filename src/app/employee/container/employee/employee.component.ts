import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../service/employee.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  private employee$: Observable<Employee[]> | Observable<Employee>;
  private requestStatus: boolean

  constructor(private employee: EmployeeService) {
    this.requestStatus = false;
  }

  public getMessage(id: number): void {
    if (id == null || id == undefined) {
      this.requestStatus = true;
      this.employee$ = this.employee.getEmployees();
      this.requestStatus = false;
    } else {
      this.requestStatus = true;
      this.employee$ = this.employee.getEmployee(id);
      this.requestStatus = false;
    }

  }



}
