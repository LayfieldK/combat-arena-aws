import { Injectable } from '@angular/core';
import { Combatant } from './types/combatant';
import { COMBATANTS } from './mock-combatants';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class CombatantService {

  constructor(private messageService: MessageService) {}

  getCombatants(): Observable<Combatant[]> {
    this.messageService.add('CombatantService: fetched combatants');
    return of(COMBATANTS);
  }
}
