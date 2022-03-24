import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EmployeeDTO } from '../../../application/ports/secondary/employee.dto';

@Component({ selector: 'lib-team-list', templateUrl: './team-list.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class TeamListComponent {
    employees$:Observable<EmployeeDTO[]> = of ([
        {
            id:'1',
            name: 'Głos Prawdy',
            bio: 'Kim jestem ? Pytać o mnie to trochę tak, jakby pytać o ducha. Aktywista sprzeciwiający się ograniczaniu wolności obywatelskich, korupcji, konsumpcjonizmowi, cenzurze i nowemu porządkowi światowemu(NWO)..........',
            department: {
                name:'bbjbj',
                employeeCount:3
            },
            imageUrl:'data:image/jpeg;base64,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',
        },
        {
            id:'2',
            name: 'Sknerus McKwacz',
            bio: 'Znany multimiliarder, najbogatszy kaczor świata.Poszukiwacz złota. Swój pierwszy milion $ zarobił po sprzedaży dużego samorodka zainwestował otwierając swój pierwszy bank..........',
            department: {
                name:'bbjbj',
                employeeCount:3
            },
            imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaQ3zQpRkps6IOTwFtuPda6hI_8JNpDy3jgQ&usqp=CAU',
        },
        {
            id:'3',
            name: 'Łukasz zwany jako Lucky Luck',
            bio: 'W jego przypadku opis jest zbędny...........',
            department: {
                name:'bbjbj',
                employeeCount:3
            },
            imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ47XNuF_fJ-2zJxhBofxD329U5yxuERbpTQA&usqp=CAU',
        },
    ]);
}
