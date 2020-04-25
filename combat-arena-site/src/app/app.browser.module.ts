import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppModule } from './app.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
imports: [
  AppRoutingModule,
  HttpClientModule,
  AppModule,
  BrowserTransferStateModule,
  BrowserAnimationsModule
],
providers: [],
bootstrap: [AppComponent]
})
export class AppBrowserModule { }
