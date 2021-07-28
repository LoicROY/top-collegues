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
    ).then(response => response.json());
  }

  // donnerUnAvis(collegue: Collegue, avis: Avis): Promise<Collegue> {
  //   // ...
  //   // TODO
  //   // POST https://formation-angular-collegues.herokuapp.com/votes
  //   // {
  //   // "pseudo": "basmor",
  //   // "avis" : "AIMER"
  //   // }
  // }
}
