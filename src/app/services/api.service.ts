import { collegues } from './../models/fictiveData';
import { Collegue } from './../models/collegue';
import { Injectable } from '@angular/core';
import { Avis } from '../models/avis';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  listerCollegues(): Promise<Collegue[]> {
    return fetch(
      'https://formation-angular-collegues.herokuapp.com/collegues',
      { method: 'GET' }
    ).then((response) => response.json());
  }

  donnerUnAvis(collegue: Collegue, avis: Avis): Promise<Collegue> {
    return fetch('https://formation-angular-collegues.herokuapp.com/votes', {
      method: 'POST',
      body: JSON.stringify({pseudo : collegue.pseudo, avis}),
      headers: { 'Content-Type': 'application/json' },
    }).then((response) => response.json());
  }
}
