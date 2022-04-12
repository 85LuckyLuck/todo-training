import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeDTO } from '../../../application/ports/secondary/employee.dto';
import { GETS_ONE_EMPLOYEE_DTO, GetsOneEmployeeDtoPort } from '../../../application/ports/secondary/gets-one-employee.dto-port';

@Component({
   selector: 'lib-employee-detail',
  templateUrl: './employee-detail.component.html',
  encapsulation: ViewEncapsulation.None,
   changeDetection: ChangeDetectionStrategy.OnPush })
export class EmployeeDetailComponent {
  employee$: Observable<EmployeeDTO> = this._getsOneEmployeeDto.getOne(this._activateRoute.snapshot.params.employeeId);

  constructor(
    private _activateRoute:ActivatedRoute,
     @Inject(GETS_ONE_EMPLOYEE_DTO) private _getsOneEmployeeDto: GetsOneEmployeeDtoPort) {}
  name$= this._activateRoute.params; 
}

 
