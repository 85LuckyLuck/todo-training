import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeDTO } from '../../../application/ports/secondary/employee.dto';
import { GETS_ONE_EMPLOYEE_DTO, GetsOneEmployeeDtoPort } from '../../../application/ports/secondary/gets-one-employee.dto-port';
import { switchMap } from 'rxjs/operators';
import { CONTEXT_DTO_STORAGE, ContextDtoStoragePort } from '../../../application/ports/secondary/context-dto.storage-port';
import { ContextDTO } from '../../../application/ports/secondary/context.dto';

@Component({
   selector: 'lib-employee-detail',
  templateUrl: './employee-detail.component.html',
  encapsulation: ViewEncapsulation.None,
   changeDetection: ChangeDetectionStrategy.OnPush 
  })
export class EmployeeDetailComponent {
  employee$: Observable<EmployeeDTO> = this._contextDtoStoragePort
  .asObservable()
  .pipe(switchMap((data: ContextDTO) => this._getsOneEmployeeDto.getOne(data.employeeId)));

  constructor(
    
     @Inject(GETS_ONE_EMPLOYEE_DTO)
      private _getsOneEmployeeDto: GetsOneEmployeeDtoPort,
       @Inject(CONTEXT_DTO_STORAGE) 
      private _contextDtoStoragePort: ContextDtoStoragePort
      ) {} 
}

 
