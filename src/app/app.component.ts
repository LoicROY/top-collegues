import { DataService } from './services/api.service';
import { Collegue } from './models/collegue';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'top-collegues';
  collegues: Promise<Collegue[]> = this.dataService.listerCollegues();
  

  constructor(private dataService: DataService) {
  }

  refresh(){
    this.collegues = this.dataService.listerCollegues();
  }
}
