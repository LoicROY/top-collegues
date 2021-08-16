import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Collegue } from './../models/collegue';
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

  createCollegue(collegue: Collegue): void {
    fetch('https://formation-angular-collegues.herokuapp.com/collegues', {
      method: 'POST',
      body: JSON.stringify(collegue),
      headers: { 'Content-Type': 'application/json' },
    })
    .then((response) => response.json());
  }

  getPseudo(pseudo: string): Observable<Collegue> {
    return this.http.get<Collegue>(`https://formation-angular-collegues.herokuapp.com/collegues/${pseudo}`)
  }
}