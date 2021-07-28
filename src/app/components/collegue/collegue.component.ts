import { DataService } from './../../services/api.service';
import { Component, Input, OnInit } from '@angular/core';
import { Avis } from 'src/app/models/avis';
import { Collegue } from 'src/app/models/collegue';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  @Input() collegue: Collegue = {
    pseudo: "Random Female",
    score: 110,
    photo: "https://randomuser.me/api/portraits/women/66.jpg"
  }

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  updateScore(vote: Avis) {
    this.dataService.donnerUnAvis(this.collegue, vote);
  }

}
