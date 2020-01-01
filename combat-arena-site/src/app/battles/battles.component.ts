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

  async getBattles(): Promise<Battle[]> {
    const battles = await this.battleService.getBattles().toPromise();
    this.battles = battles;
    if (!this.selectedBattle && battles.length > 0) { this.selectedBattle = battles[0]; }
    return battles;
  }

  listClick(newValue: Battle) {
    this.selectedBattle = newValue;
  }

}
