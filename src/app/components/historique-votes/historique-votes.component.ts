import { Vote } from './../../models/vote';
import { Component, Input, OnInit } from '@angular/core';
import { vote } from './../../models/fictiveData';

@Component({
  selector: 'app-historique-votes',
  templateUrl: './historique-votes.component.html',
  styleUrls: ['./historique-votes.component.css']
})
export class HistoriqueVotesComponent implements OnInit {

  @Input() votes: Vote[] = [vote];

  constructor() { }

  ngOnInit(): void {
  }

  delete(vote: Vote) {
    const id = this.votes.findIndex(data => data == vote);
    this.votes.splice(id, 1);
  }

}
