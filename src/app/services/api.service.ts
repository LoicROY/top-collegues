import { HttpClient } from '@angular/common/http';
import { Collegue } from './../models/collegue';
import { Injectable } from '@angular/core';
import { Avis } from '../models/avis';
import { Vote } from '../models/vote';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  private subjectHistoriqueVote = new Subject<Vote[]>();

  constructor(private http: HttpClient) {}

  // listerCollegues(): Promise<Collegue[]> {
  //   return fetch(
  //     'https://formation-angular-collegues.herokuapp.com/collegues',
  //     { method: 'GET' }
  //   ).then((response) => response.json());
  // }

  // donnerUnAvis(collegue: Collegue, avis: Avis): Promise<Collegue> {
  //   return fetch('https://formation-angular-collegues.herokuapp.com/votes', {
  //     method: 'POST',
  //     body: JSON.stringify({pseudo : collegue.pseudo, avis}),
  //     headers: { 'Content-Type': 'application/json' },
  //   }).then((response) => response.json());
  // }

  // listerVotes(): Promise<Vote[]> {
  //   return fetch(
  //     'https://formation-angular-collegues.herokuapp.com/votes',
  //     { method: 'GET' }
  //   ).then((response) => response.json());
  //   }

  listerCollegues(): Observable<Collegue[]> {
    return this.http.get<Collegue[]>('https://formation-angular-collegues.herokuapp.com/collegues')
  }

  donnerUnAvis(collegue: Collegue, avis: Avis): Observable<Collegue> {    
    return this.http.post<Collegue>(
      'https://formation-angular-collegues.herokuapp.com/votes',
      {pseudo : collegue.pseudo, avis}
    ).pipe(
      tap(() => this.listerVotes())
    )
  }

  // listerVotes(): Observable<Vote[]> {
  //   return this.http.get<Vote[]>('https://formation-angular-collegues.herokuapp.com/votes')
  // }

  listerVotes(): void {
    this.http.get<Vote[]>('https://formation-angular-collegues.herokuapp.com/votes')
    .subscribe((votes: Vote[]) => this.publishHistorique(votes));
  }

  publishHistorique(votes: Vote[]){
    this.subjectHistoriqueVote.next(votes);
  }

  get historique(){
    return this.subjectHistoriqueVote.asObservable();
  }
}