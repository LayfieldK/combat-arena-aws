import { Component, OnInit, Input } from '@angular/core';
import { Combatant } from '../types/combatant';

@Component({
  selector: 'app-combatant-detail',
  templateUrl: './combatant-detail.component.html',
  styleUrls: ['./combatant-detail.component.css']
})
export class CombatantDetailComponent implements OnInit {

  @Input() combatant: Combatant;

  constructor() { }

  ngOnInit() {
  }

}
