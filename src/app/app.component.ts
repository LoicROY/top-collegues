import { DataService } from './services/api.service';
import { Collegue } from './models/collegue';
import { Component } from '@angular/core';
import { Vote } from './models/vote';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'top-collegues';
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
