import { Component, OnInit } from '@angular/core';
import { Combatant } from '../types/combatant';
import { COMBATANTS } from '../mock-combatants';


@Component({
  selector: 'app-combatants',
  templateUrl: './combatants.component.html',
  styleUrls: ['./combatants.component.css']
})
export class CombatantsComponent implements OnInit {
  combatants = COMBATANTS;
  selectedCombatant: Combatant;

  onSelect(combatant: Combatant): void {
    this.selectedCombatant = combatant;
  }

  constructor() { }

  ngOnInit() {

  }

}
