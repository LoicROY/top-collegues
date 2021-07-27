import { Avis } from './../models/avis';
import { Component, Input, OnInit } from '@angular/core';
import { Collegue } from '../models/collegue';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  @Input() collegue: Collegue = {
    pseudo: "Random Female",
    score: 110,
    photoUrl: "https://randomuser.me/api/portraits/women/66.jpg"
  }

  constructor() { }

  ngOnInit(): void {
  }

  updateScore(vote: Avis) {
    switch (vote) {
      case Avis.AIMER:
        this.collegue.score++;
        break;

      case Avis.DETESTER:
        this.collegue.score--;
        break;
    
      default:
        break;
    }
  }

}
