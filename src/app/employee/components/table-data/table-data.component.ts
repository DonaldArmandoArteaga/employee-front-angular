import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { EmployeeService } from '../../service/employee.service';
import { Employee } from '../../models/employee';



@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css']
})
export class TableDataComponent {

  constructor(private changeDetectorRefs: ChangeDetectorRef) { }

  displayedColumns: string[] = ['id', 'name', 'contractTypeName', 'roleName', 'roleDescription', 'hourlySalary', 'monthlySalary', 'annualSalary'];

  private _datasource: any;
  private _isLoading = false

  @Input()
  set datasource$(datasource: any) {

    if (datasource == null) {
      this._datasource = new Array<Employee[]>();
    }

    if (datasource != undefined) {
      if (Array.isArray(datasource)) {
        this._datasource = datasource;
      } else {
        this._datasource = new Array<Employee[]>(datasource);
      }
    }
    this.changeDetectorRefs.detectChanges();
  }

  @Input()
  set isLoading(state: boolean) {
    this._isLoading = state;
  }

}
