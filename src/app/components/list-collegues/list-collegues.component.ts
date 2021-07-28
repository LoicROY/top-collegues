import { Component, Input, OnInit } from '@angular/core';
import { Collegue } from 'src/app/models/collegue';

@Component({
  selector: 'app-list-collegues',
  templateUrl: './list-collegues.component.html',
  styleUrls: ['./list-collegues.component.css']
})
export class ListColleguesComponent implements OnInit {

  @Input() collegues: Collegue[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
