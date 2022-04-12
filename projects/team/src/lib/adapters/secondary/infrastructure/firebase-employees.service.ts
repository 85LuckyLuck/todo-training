import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllEmployeeDtoPort } from '../../../application/ports/secondary/gets-all-employee.dto-port';
import { EmployeeDTO } from '../../../application/ports/secondary/employee.dto';
import { filterByCriterion } from '@lowgular/shared';
import { AddsEmployeeDtoPort } from '../../../application/ports/secondary/adds-employee.dto-port';
import { GetsOneEmployeeDtoPort } from '../../../application/ports/secondary/gets-one-employee.dto-port';

@Injectable()
export class FirebaseEmployeesService implements GetsAllEmployeeDtoPort, AddsEmployeeDtoPort, GetsOneEmployeeDtoPort {
  constructor(private _client: AngularFirestore) {
  }

  getAll(criterion: Partial<EmployeeDTO>): Observable<EmployeeDTO[]> {
    return this._client
    .collection<EmployeeDTO>('pieniadz-employees-list')
    .valueChanges(({idField: 'id'}))
    .pipe(map((data: EmployeeDTO[]) => filterByCriterion(data, criterion)));
  }

  add(createEmployee: Partial<EmployeeDTO>): void {
    this._client.collection('pieniadz-employees-list').add(createEmployee);
  }

  getOne(id: string): Observable<EmployeeDTO> {
    return this._client
    .doc<EmployeeDTO>('pieniadz-employees-list/'+id)
    .valueChanges({idField: 'id'});
  }
}
