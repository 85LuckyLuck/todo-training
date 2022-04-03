import { InjectionToken } from '@angular/core';
import { EmployeeDTO } from './employee.dto';

export const ADDS_EMPLOYEE_DTO = new InjectionToken<AddsEmployeeDtoPort>('ADDS_EMPLOYEE_DTO');

export interface AddsEmployeeDtoPort {
  add(employee: Partial<EmployeeDTO>): void;
}
