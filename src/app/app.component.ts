import { Collegue } from './models/collegue';
import { collegues } from './models/fictiveData';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'top-collegues';
  collegues: Collegue[] = collegues
}
