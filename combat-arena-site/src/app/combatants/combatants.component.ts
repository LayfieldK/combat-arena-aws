import { Component, OnInit } from '@angular/core';
import { Combatant } from '../types/combatant';

@Component({
  selector: 'app-combatants',
  templateUrl: './combatants.component.html',
  styleUrls: ['./combatants.component.css']
})
export class CombatantsComponent implements OnInit {
  combatant: Combatant = {
    id: 1,
    name: 'Windstorm'
  };

  constructor() { }

  ngOnInit() {

  }

}
