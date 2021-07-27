import { Component, OnInit } from '@angular/core';
import { Collegue } from '../models/collegue';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  collegue: Collegue = {
    pseudo: "Random Female",
    score: 100,
    photoUrl: "https://randomuser.me/api/portraits/women/66.jpg"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
