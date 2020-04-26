import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Combatant } from './types/combatant';
import { COMBATANTS } from './mock-combatants';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { Guid } from 'guid-ts';

@Injectable({
  providedIn: 'root'
})
export class CombatantService {

  private combatantsUrl = 'api/combatants';  // URL to web api
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) {}

  /** GET combatants from the server */
  getCombatants(): Observable<Combatant[]> {
    // return of(COMBATANTS);
    return this.http.get<Combatant[]>(this.combatantsUrl)
      .pipe(
        tap(_ => this.log('fetched combatants')),
        catchError(this.handleError<Combatant[]>('getCombatants', []))
      );
  }

  getCombatant(id: string): Observable<Combatant> {
    // return of(COMBATANTS.find(combatant => combatant.id === id));
    const url = `${this.combatantsUrl}/${id.toString()}`;
    return this.http.get<Combatant>(url).pipe(
      tap(_ => this.log(`fetched combatant id=${id.toString()}`)),
      catchError(this.handleError<Combatant>(`getCombatant id=${id.toString()}`))
    );
  }

  /** POST: add a new combatant to the server */
  addCombatant(combatant: Combatant): Observable<Combatant> {
    return this.http.post<Combatant>(this.combatantsUrl, combatant, this.httpOptions).pipe(
      tap((newCombatant: Combatant) => this.log(`added combatant w/ id=${newCombatant.id.toString()}`)),
      catchError(this.handleError<Combatant>('addCombatant'))
    );
  }

  /** PUT: update the Combatant on the server */
  updateCombatant(combatant: Combatant): Observable<any> {
    return this.http.put(this.combatantsUrl, combatant, this.httpOptions).pipe(
      tap(_ => this.log(`updated combatant id=${combatant.id.toString()}`)),
      catchError(this.handleError<any>('updateCombatant'))
    );
  }

  /** DELETE: delete the combatant from the server */
  deleteCombatant(combatant: Combatant | string): Observable<Combatant> {
    const id = typeof combatant === 'string' ? combatant : combatant.id;
    const url = `${this.combatantsUrl}/${id.toString()}`;

    return this.http.delete<Combatant>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted combatant id=${id.toString()}`)),
      catchError(this.handleError<Combatant>('deleteCombatant'))
    );
  }

  /* GET combatants whose name contains search term */
  searchCombatants(term: string): Observable<Combatant[]> {
    if (!term.trim()) {
      // if not search term, return empty combatant array.
      return of([]);
    }
    return this.http.get<Combatant[]>(`${this.combatantsUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found combatants matching "${term}"`)),
      catchError(this.handleError<Combatant[]>('searchCombatants', []))
    );
  }

  /** Log a CombatantService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`CombatantService: ${message}`);
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
