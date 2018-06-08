import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule , MatListModule, MatMenuModule, MatIconModule, MatSpinner, MatProgressSpinnerModule} from '@angular/material';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MatButtonModule, MatCheckboxModule,MatListModule,MatMenuModule,MatIconModule,MatProgressSpinnerModule,
    BrowserModule,
    BrowserAnimationsModule,NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
