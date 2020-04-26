import { Team } from './team';
import { TournamentRound } from './tournamentRound';

export class Tournament {
    id: number;
    name: string;
    teams: Team[];
    rounds: TournamentRound[];
  }
