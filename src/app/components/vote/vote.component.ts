import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { vote } from 'src/app/models/fictiveData';
import { Vote } from 'src/app/models/vote';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  @Input() vote: Vote = vote;
  @Output() emitter = new EventEmitter<Vote>();

  constructor() { }

  ngOnInit(): void {
  }

  delete() {
    this.emitter.emit(this.vote);
  }

}
