import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FirebaseEmployeesService } from './firebase-employees.service';
import { GETS_ALL_EMPLOYEE_DTO } from '../../../application/ports/secondary/gets-all-employee.dto-port';
import { ADDS_EMPLOYEE_DTO } from '../../../application/ports/secondary/adds-employee.dto-port';

@NgModule({ imports: [AngularFirestoreModule],
  	declarations: [],
  	providers: [FirebaseEmployeesService, { provide: GETS_ALL_EMPLOYEE_DTO, useExisting: FirebaseEmployeesService }, { provide: ADDS_EMPLOYEE_DTO, useExisting: FirebaseEmployeesService }],
  	exports: [] })
export class FirebaseEmployeesServiceModule {
}
