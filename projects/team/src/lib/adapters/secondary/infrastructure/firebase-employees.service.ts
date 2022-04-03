import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllEmployeeDtoPort } from '../../../application/ports/secondary/gets-all-employee.dto-port';
import { EmployeeDTO } from '../../../application/ports/secondary/employee.dto';
import { filterByCriterion } from '@lowgular/shared';
import { AddsEmployeeDtoPort } from '../../../application/ports/secondary/adds-employee.dto-port';

@Injectable()
export class FirebaseEmployeesService implements GetsAllEmployeeDtoPort, AddsEmployeeDtoPort {
  constructor(private _client: AngularFirestore) {
  }

  getAll(criterion: Partial<EmployeeDTO>): Observable<EmployeeDTO[]> {
    return this._client
    .collection<EmployeeDTO>('pieniadz-employees-list')
    .valueChanges(({idField: 'id'}))
    .pipe(map((data: EmployeeDTO[]) => filterByCriterion(data, criterion)));
  }

  add(employee: Partial<EmployeeDTO>): void {
    this._client.collection('employees').add(employee);
  }
}
