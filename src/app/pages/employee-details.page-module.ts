import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeeDetailsPage } from './employee-details.page';
import { EmployeeDetailComponentModule } from '../../../projects/team/src/lib/adapters/primary/ui/employee-detail.component-module';
import { FirebaseEmployeesServiceModule } from '../../../projects/team/src/lib/adapters/secondary/infrastructure/firebase-employees.service-module';
import { EmployeeIdResolverModule } from '@team';
import { EmployeeIdResolver } from 'projects/team/src/lib/adapters/primary/ui/employee-id.resolver';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: EmployeeDetailsPage,
          resolve: {
            employeeId: EmployeeIdResolver,
          }
        }
      ]),
  EmployeeDetailComponentModule,
  FirebaseEmployeesServiceModule,
  EmployeeIdResolverModule,
],
  	declarations: [EmployeeDetailsPage],
  	providers: [],
  	exports: [] })
export class EmployeeDetailsPageModule {
}
