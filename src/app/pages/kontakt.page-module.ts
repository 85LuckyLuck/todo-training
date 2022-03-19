import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { KontaktPage } from './kontakt.page';
import { ContactUsComponentModule } from '../../../projects/messages/src/lib/adapters/primary/ui/contact-us.component-module';
import { TeamListComponentModule } from '../../../projects/team/src/lib/adapters/primary/ui/team-list.component-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: KontaktPage,
        }
      ]),
  ContactUsComponentModule,
  TeamListComponentModule
],
  	declarations: [KontaktPage],
  	providers: [],
  	exports: [] })
export class KontaktPageModule {
}
