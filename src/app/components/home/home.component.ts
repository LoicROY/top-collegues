import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/api.service';
import { Collegue } from '../../models/collegue';
import { Vote } from '../../models/vote';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  collegues: Observable<Collegue[]> = this.dataService.listerCollegues();
  historiqueVote: Observable<Vote[]> = this.dataService.historique;

  constructor(private dataService: DataService) {
    this.dataService.listerVotes();
  }

  refresh(){
    this.collegues = this.dataService.listerCollegues();
    this.dataService.listerVotes();
  }

}
