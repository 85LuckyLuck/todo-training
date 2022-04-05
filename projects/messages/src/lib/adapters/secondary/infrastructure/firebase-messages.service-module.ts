import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FirebaseMessagesService } from './firebase-messages.service';

@NgModule({ imports: [AngularFirestoreModule],
  	declarations: [],
  	providers: [FirebaseMessagesService],
  	exports: [] })
export class FirebaseMessagesServiceModule {
}
