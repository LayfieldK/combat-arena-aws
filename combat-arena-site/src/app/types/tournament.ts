import { Team } from './team';
import { TournamentRound } from './tournamentRound';

export class Tournament {
    id: string;
    name: string;
    teams: Team[];
    rounds: TournamentRound[];
  }
