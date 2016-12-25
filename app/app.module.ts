import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule], //other modules need for this
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
