import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CombatantsComponent } from './combatants/combatants.component';
import { CombatantDetailComponent } from './combatant-detail/combatant-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
declarations: [
  AppComponent,
  FirstComponent,
  SecondComponent,
  MenuComponent,
  CombatantsComponent,
  CombatantDetailComponent,
  MessagesComponent,
  DashboardComponent
],
imports: [
  BrowserModule.withServerTransition({ appId: 'serverApp' }),
  AppRoutingModule,
  HttpClientModule,
  CommonModule,
  TransferHttpCacheModule,
  NgtUniversalModule,
  FormsModule
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }
