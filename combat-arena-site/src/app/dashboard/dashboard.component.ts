import { Component, OnInit } from '@angular/core';
import { Combatant } from '../types/combatant';
import { CombatantService } from '../combatant.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {
  combatants: Combatant[] = [];

  constructor(private combatantService: CombatantService) { }

  ngOnInit() {
    this.getCombatants();
  }

  getCombatants(): void {
    this.combatantService.getCombatants()
      .subscribe(combatants => this.combatants = combatants.slice(1, 5));
  }
}
