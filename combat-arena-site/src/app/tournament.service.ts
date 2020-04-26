import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Tournament } from './types/tournament';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  private tournamentsUrl = 'api/tournaments';  // URL to web api
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) {}

  /** GET tournaments from the server */
  getTournaments(): Observable<Tournament[]> {
    return this.http.get<Tournament[]>(this.tournamentsUrl)
      .pipe(
        tap(_ => this.log('fetched tournaments')),
        catchError(this.handleError<Tournament[]>('getTournaments', []))
      );
  }

  getTournament(id: number): Observable<Tournament> {
    const url = `${this.tournamentsUrl}/${id}`;
    return this.http.get<Tournament>(url).pipe(
      tap(_ => this.log(`fetched tournament id=${id}`)),
      catchError(this.handleError<Tournament>(`getTournament id=${id}`))
    );
  }

  /** POST: add a new tournament to the server */
  addTournament(tournament: Tournament): Observable<Tournament> {
    return this.http.post<Tournament>(this.tournamentsUrl, tournament, this.httpOptions).pipe(
      tap((newTournament: Tournament) => this.log(`added tournament w/ id=${newTournament.id}`)),
      catchError(this.handleError<Tournament>('addTournament'))
    );
  }

  /** PUT: update the Tournament on the server */
  updateTournament(tournament: Tournament): Observable<any> {
    return this.http.put(this.tournamentsUrl, tournament, this.httpOptions).pipe(
      tap(_ => this.log(`updated tournament id=${tournament.id}`)),
      catchError(this.handleError<any>('updateTournament'))
    );
  }

  /** DELETE: delete the tournament from the server */
  deleteTournament(tournament: Tournament | number): Observable<Tournament> {
    const id = typeof tournament === 'number' ? tournament : tournament.id;
    const url = `${this.tournamentsUrl}/${id}`;

    return this.http.delete<Tournament>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted tournament id=${id}`)),
      catchError(this.handleError<Tournament>('deleteTournament'))
    );
  }

  /* GET tournaments whose name contains search term */
  searchTournaments(term: string): Observable<Tournament[]> {
    if (!term.trim()) {
      // if not search term, return empty tournament array.
      return of([]);
    }
    return this.http.get<Tournament[]>(`${this.tournamentsUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found tournaments matching "${term}"`)),
      catchError(this.handleError<Tournament[]>('searchTournaments', []))
    );
  }

  /** Log a TournamentService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`TournamentService: ${message}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}