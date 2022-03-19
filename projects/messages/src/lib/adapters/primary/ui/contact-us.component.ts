import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({ selector: 'lib-contact-us', templateUrl: './contact-us.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class ContactUsComponent {
  readonly messageForm: FormGroup = new FormGroup({email: new FormControl(), text: new FormControl()});
  onFormSubmited(messageForm: FormGroup): void {
    alert(`email: ${messageForm.value.email}, text: ${messageForm.value.text}`);
    console.log(messageForm.getRawValue());
  }
}
