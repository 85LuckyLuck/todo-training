import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeDTO } from './employee.dto';

export const GETS_ONE_EMPLOYEE_DTO = new InjectionToken<GetsOneEmployeeDtoPort>('GETS_ONE_EMPLOYEE_DTO');

export interface GetsOneEmployeeDtoPort {
  getOne(id: string): Observable<EmployeeDTO | undefined>;
}
