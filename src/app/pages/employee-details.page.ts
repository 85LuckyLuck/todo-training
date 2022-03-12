import { 
    Component,
     ViewEncapsulation,
     ChangeDetectionStrategy, 
     OnInit
    } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({ 
    selector: 'lib-employee-details-page', 
    templateUrl: './employee-details.page.html', 
    encapsulation: ViewEncapsulation.None,
     changeDetection: ChangeDetectionStrategy.OnPush,
     })
export class EmployeeDetailsPage  {
   
    constructor(private _activateRoute:ActivatedRoute) {}
name$= this._activateRoute.params;

}
