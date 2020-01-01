import { Component, OnInit } from '@angular/core';
import { Battle } from '../types/battle';
import { BattleService } from '../battle.service';

@Component({
  selector: 'app-battles',
  templateUrl: './battles.component.html',
  styleUrls: ['./battles.component.scss']
})
export class BattlesComponent implements OnInit {

  battles: Battle[];
  selectedBattle: Battle;

  constructor(private battleService: BattleService) { }

  ngOnInit() {
    this.getBattles();
  }

  getBattles(): void {
    this.battleService.getBattles()
      .subscribe(battles => this.battles = battles);
  }

  listClick(newValue: Battle) {
    this.selectedBattle = newValue;
  }

}
