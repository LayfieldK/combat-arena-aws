import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Combatant } from './types/combatant';
import { Battle } from './types/battle';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class BattleService {

  private battlesUrl = 'api/battles';  // URL to web api
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) {}

  /** GET battles from the server */
  getBattles(): Observable<Battle[]> {
    return this.http.get<Battle[]>(this.battlesUrl)
      .pipe(
        tap(_ => this.log('fetched battles')),
        catchError(this.handleError<Battle[]>('getBattles', []))
      );
  }

  getBattle(id: number): Observable<Battle> {
    const url = `${this.battlesUrl}/${id}`;
    return this.http.get<Battle>(url).pipe(
      tap(_ => this.log(`fetched battle id=${id}`)),
      catchError(this.handleError<Battle>(`getBattle id=${id}`))
    );
  }

  /** POST: add a new battle to the server */
  addBattle(battle: Battle): Observable<Battle> {
    return this.http.post<Battle>(this.battlesUrl, battle, this.httpOptions).pipe(
      tap((newBattle: Battle) => this.log(`added battle w/ id=${newBattle.id}`)),
      catchError(this.handleError<Battle>('addBattle'))
    );
  }

  /** PUT: update the Battle on the server */
  updateBattle(battle: Battle): Observable<any> {
    return this.http.put(this.battlesUrl, battle, this.httpOptions).pipe(
      tap(_ => this.log(`updated battle id=${battle.id}`)),
      catchError(this.handleError<any>('updateBattle'))
    );
  }

  /** DELETE: delete the battle from the server */
  deleteBattle(battle: Battle | number): Observable<Battle> {
    const id = typeof battle === 'number' ? battle : battle.id;
    const url = `${this.battlesUrl}/${id}`;

    return this.http.delete<Battle>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted battle id=${id}`)),
      catchError(this.handleError<Battle>('deleteBattle'))
    );
  }

  /* GET battles whose name contains search term */
  searchBattles(term: string): Observable<Battle[]> {
    if (!term.trim()) {
      // if not search term, return empty battle array.
      return of([]);
    }
    return this.http.get<Battle[]>(`${this.battlesUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found battles matching "${term}"`)),
      catchError(this.handleError<Battle[]>('searchBattles', []))
    );
  }

  /** Log a BattleService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`BattleService: ${message}`);
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
