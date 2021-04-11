// projects/playground-app/src/app/app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoggerLibModule } from '@my/logger-lib';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    LoggerLibModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
