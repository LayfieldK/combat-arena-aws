import { Component, OnInit, Input } from '@angular/core';
import { Combatant } from '../types/combatant';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Guid } from 'guid-ts';

import { CombatantService } from '../combatant.service';

@Component({
  selector: 'app-combatant-detail',
  templateUrl: './combatant-detail.component.html',
  styleUrls: ['./combatant-detail.component.scss']
})
export class CombatantDetailComponent implements OnInit {

  @Input() combatant: Combatant;

  constructor(
    private route: ActivatedRoute,
    private combatantService: CombatantService,
    private location: Location) { }

  ngOnInit() {
    this.getCombatant();
  }

  getCombatant(): void {
    const id = new Guid(this.route.snapshot.paramMap.get('id'));
    this.combatantService.getCombatant(id.toString())
      .subscribe(combatant => this.combatant = combatant);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.combatantService.updateCombatant(this.combatant)
      .subscribe(() => this.goBack());
  }

}
