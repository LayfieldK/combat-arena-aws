import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CombatantsComponent } from './combatants/combatants.component';
import { CombatantDetailComponent } from './combatant-detail/combatant-detail.component';
import { TournamentsComponent } from './tournaments/tournaments.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CombatantSearchComponent } from './combatant-search/combatant-search.component';
import { SplashComponent } from './splash/splash.component';
import { GraphQLModule } from './graphql.module';

@NgModule({
declarations: [
  AppComponent,
  CombatantsComponent,
  CombatantDetailComponent,
  TournamentsComponent,
  MessagesComponent,
  DashboardComponent,
  CombatantSearchComponent,
  SplashComponent
],
imports: [
  BrowserModule.withServerTransition({ appId: 'serverApp' }),
  AppRoutingModule,
  HttpClientModule,
  CommonModule,
  NgbModule,
  TransferHttpCacheModule,
  NgtUniversalModule,
  FormsModule,
  GraphQLModule
  // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
  // and returns simulated server responses.
  // Remove it when a real server is ready to receive requests.
  // HttpClientInMemoryWebApiModule.forRoot(
  //   InMemoryDataService, { dataEncapsulation: false }
  // )
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }
