import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';
import { Combatant } from '../types/combatant';
import { CombatantService } from '../combatant.service';

@Component({
  selector: 'app-combatant-search',
  templateUrl: './combatant-search.component.html',
  styleUrls: [ './combatant-search.component.css' ]
})
export class CombatantSearchComponent implements OnInit {
  combatants$: Observable<Combatant[]>;
  private searchTerms = new Subject<string>();

  constructor(private combatantService: CombatantService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.combatants$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.combatantService.searchCombatants(term)),
    );
  }
}
