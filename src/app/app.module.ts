import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GeneralCompComponent } from './general-comp/general-comp.component';
import {DataServiceService} from './data-service.service'
 
@NgModule({
  declarations: [
    AppComponent,
    GeneralCompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
