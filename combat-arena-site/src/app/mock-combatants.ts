import { Combatant } from './types/Combatant';
import { Guid } from 'guid-ts';

export const COMBATANTS: Combatant[] = [
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
