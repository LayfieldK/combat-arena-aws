import { Component, OnInit } from '@angular/core';
import { Combatant } from '../types/combatant';
import { CombatantService } from '../combatant.service';


@Component({
  selector: 'app-combatants',
  templateUrl: './combatants.component.html',
  styleUrls: ['./combatants.component.css']
})
export class CombatantsComponent implements OnInit {
  combatants: Combatant[];
  selectedCombatant: Combatant;

  onSelect(combatant: Combatant): void {
    this.selectedCombatant = combatant;
  }

  constructor(private combatantService: CombatantService) { }

  ngOnInit() {
    this.getCombatants();
  }

  getCombatants(): void {
    this.combatantService.getCombatants()
      .subscribe(combatants => this.combatants = combatants);
  }

}
