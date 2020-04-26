import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplashComponent } from './splash/splash.component';
import { CombatantsComponent } from './combatants/combatants.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CombatantDetailComponent } from './combatant-detail/combatant-detail.component';
import { TournamentsComponent } from './tournaments/tournaments.component';

// leaving this here, commented out, reminding myself that it can be done this way
// const routes: Routes = [
//   { path: '', redirectTo: '/combatants', pathMatch: 'full' },
//   { path: 'combatants', component: CombatantsComponent }
// ];

@NgModule({
 imports: [
   RouterModule.forRoot([
    { path: '', redirectTo: '/splash', pathMatch: 'full' },
    { path: 'splash', component: SplashComponent },
    { path: 'combatants', component: CombatantsComponent },
    { path: 'tournaments', component: TournamentsComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'detail/:id', component: CombatantDetailComponent },
], {
    initialNavigation: 'enabled'
})
 ],
 exports: [ RouterModule ]
})
export class AppRoutingModule { }
