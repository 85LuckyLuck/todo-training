import { FormGroup, FormControl } from '@angular/forms';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { ADDS_MESSAGE_DTO, AddsMessageDtoPort } from '../../../application/ports/secondary/adds-message.dto-port';

@Component({ selector: 'lib-contact-us', templateUrl: './contact-us.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class ContactUsComponent {
  readonly messageForm: FormGroup = new FormGroup({
    email: new FormControl(),
    text: new FormControl()});
    
  onFormSubmited(messageForm: FormGroup): void {
    alert(`email: ${messageForm.value.email}, text: ${messageForm.value.text}`);
    console.log(messageForm.getRawValue());
  }

  constructor(@Inject(ADDS_MESSAGE_DTO) private _addsMessageDto: AddsMessageDtoPort) {
  }

  onMessageFormSubmited(messageForm: FormGroup): void {
    this._addsMessageDto.add(messageForm.getRawValue());
    messageForm.reset();
  }
}
