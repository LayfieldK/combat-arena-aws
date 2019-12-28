import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplashComponent } from './splash/splash.component';
import { CombatantsComponent } from './combatants/combatants.component';
import { BattlesComponent } from './battles/battles.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CombatantDetailComponent } from './combatant-detail/combatant-detail.component';

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
     { path: 'battles', component: BattlesComponent },
     { path: 'dashboard', component: DashboardComponent },
     { path: 'detail/:id', component: CombatantDetailComponent },
   ])
 ],
 exports: [ RouterModule ]
})
export class AppRoutingModule { }
