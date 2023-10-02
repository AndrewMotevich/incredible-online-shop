import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoodsModule } from './goods/goods.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    GoodsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

