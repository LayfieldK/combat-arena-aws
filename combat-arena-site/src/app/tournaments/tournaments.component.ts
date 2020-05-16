import { Component, OnInit } from '@angular/core';
import { Tournament } from '../types/tournament';
import { TournamentService } from '../tournament.service';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';

type Response = {
  tournaments: Tournament[];
};

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.scss']
})
export class TournamentsComponent implements OnInit {

  loading = true;
  error: any;
  tournaments: Tournament[];

  // constructor(private tournamentService: TournamentService) { }
  constructor(private apollo: Apollo) {}

  ngOnInit() {
    // this.getTournaments();
    this.apollo
      .watchQuery<Response>({
        query: gql`
        {
          tournaments(numberOfRecentTournaments: 5) {
            id
            date
            teams {
              id
              name
            }
            victor { id }
          }
        }
        `,
      })
      .valueChanges.subscribe(result => {
        this.tournaments = result.data && result.data.tournaments;
        this.loading = result.loading;
        this.error = result.errors;
      });
  }


  // getTournaments(): void {
  //   this.tournamentService.getTournaments()
  //     .subscribe(tournaments => this.tournaments = tournaments );
  // }

}
