import { Combatant } from './combatant';

export class Battle {
    id: number;
    name: string;
    combatants: Combatant[];
    winningTeamId: number;
  }
