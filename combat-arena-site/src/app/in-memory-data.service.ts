import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Combatant } from './types/combatant';
import { Injectable } from '@angular/core';
import { Guid } from 'guid-ts';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const combatants = [
      { id: Guid.newGuid().toString(), name: 'Dr Nice' },
      { id: Guid.newGuid().toString(), name: 'Narco' },
      { id: Guid.newGuid().toString(), name: 'Bombasto' },
      { id: Guid.newGuid().toString(), name: 'Celeritas' },
      { id: Guid.newGuid().toString(), name: 'Magneta' },
      { id: Guid.newGuid().toString(), name: 'RubberMan' },
      { id: Guid.newGuid().toString(), name: 'Dynama' },
      { id: Guid.newGuid().toString(), name: 'Dr IQ' },
      { id: Guid.newGuid().toString(), name: 'Magma' },
      { id: Guid.newGuid().toString(), name: 'Tornado' }
    ];
    const battles = [
      {
        id: 1, name: 'Dr Nice vs Tornado',
        combatants: [{ id: 11, name: 'Dr Nice' }, { id: 20, name: 'Tornado' }]
      },
      {
        id: 1, name: 'Bombasto vs Magma',
        combatants: [{ id: 13, name: 'Bombasto' }, { id: 19, name: 'Magma' }]
      },
      {
        id: 1, name: 'Narco and Magneta vs Dynama and RubberMan',
        combatants: [{ id: 12, name: 'Narco' }, { id: 15, name: 'Magneta' }, { id: 17, name: 'Dynama' }, { id: 16, name: 'RubberMan' }]
      }
    ];
    return {combatants, battles};
  }

  // Overrides the genId method to ensure that a combatant always has an id.
  // If the combatants array is empty,
  // the method below returns the initial number (11).
  // if the combatants array is not empty, the method below returns the highest
  // combatant id + 1.
  genId(combatants: Combatant[]): string {
    return Guid.newGuid().toString();
  }
}
