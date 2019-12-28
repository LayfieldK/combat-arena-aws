import { Component, OnInit } from '@angular/core';
import { Combatant } from '../types/combatant';
import { CombatantService } from '../combatant.service';


@Component({
  selector: 'app-combatants',
  templateUrl: './combatants.component.html',
  styleUrls: ['./combatants.component.scss']
})
export class CombatantsComponent implements OnInit {
  combatants: Combatant[];

  constructor(private combatantService: CombatantService) { }

  ngOnInit() {
    this.getCombatants();
  }

  getCombatants(): void {
    this.combatantService.getCombatants()
      .subscribe(combatants => this.combatants = combatants);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.combatantService.addCombatant({ name } as Combatant)
      .subscribe(combatant => {
        this.combatants.push(combatant);
      });
  }

  delete(combatant: Combatant): void {
    this.combatants = this.combatants.filter(h => h !== combatant);
    this.combatantService.deleteCombatant(combatant).subscribe();
  }

}
