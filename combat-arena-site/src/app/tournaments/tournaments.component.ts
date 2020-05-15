import { Component, OnInit } from '@angular/core';
import { Tournament } from '../types/tournament';
import { TournamentService } from '../tournament.service';

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.scss']
})
export class TournamentsComponent implements OnInit {

  tournaments: Tournament[];

  constructor(private tournamentService: TournamentService) { }

  ngOnInit() {
    this.getTournaments();
  }

  getTournaments(): void {
    this.tournamentService.getTournaments()
      .subscribe(tournaments => this.tournaments = tournaments );
  }

}
