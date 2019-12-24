import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CombatantsComponent } from './combatants/combatants.component';
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
     { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
     { path: 'combatants', component: CombatantsComponent },
     { path: 'dashboard', component: DashboardComponent },
     { path: 'detail/:id', component: CombatantDetailComponent },
   ])
 ],
 exports: [ RouterModule ]
})
export class AppRoutingModule { }
