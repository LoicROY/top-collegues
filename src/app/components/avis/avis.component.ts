import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Avis } from 'src/app/models/avis';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css']
})
export class AvisComponent implements OnInit {

  @Output() vote = new EventEmitter<Avis>();
  @Input() likeDisable = false;
  @Input() dislikeDisable = false;

  constructor() { }

  ngOnInit(): void {
  }

  liker() {
    this.vote.emit(Avis.AIMER);
  }
  
  disliker() {
    this.vote.emit(Avis.DETESTER);
  }
}
