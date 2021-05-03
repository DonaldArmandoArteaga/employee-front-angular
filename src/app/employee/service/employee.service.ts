import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Employee } from '../models/employee';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) { }

  public getEmployee(id: number): Observable<Employee> {
    return this.http.get<Employee>(environment.apiUrl.concat('employees/').concat(id.toString()))
      .pipe(
        catchError(error => {
          this._snackBar.open("Employee id not found", "", {
            duration: 2000,
          });
          return throwError(error);
        }),
      );
  }

  public getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(environment.apiUrl.concat('employees/'))
  }


}