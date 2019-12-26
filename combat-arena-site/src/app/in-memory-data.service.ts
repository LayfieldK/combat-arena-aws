import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Combatant } from './types/combatant';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const combatants = [
      { id: 11, name: 'Dr Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    return {combatants};
  }

  // Overrides the genId method to ensure that a combatant always has an id.
  // If the combatants array is empty,
  // the method below returns the initial number (11).
  // if the combatants array is not empty, the method below returns the highest
  // combatant id + 1.
  genId(combatants: Combatant[]): number {
    return combatants.length > 0 ? Math.max(...combatants.map(combatant => combatant.id)) + 1 : 11;
  }
}
