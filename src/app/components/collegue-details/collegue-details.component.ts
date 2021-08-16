import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Collegue } from 'src/app/models/collegue';
import { collegues } from 'src/app/models/fictiveData';
import { DataService } from 'src/app/services/api.service';

@Component({
  selector: 'app-collegue-details',
  templateUrl: './collegue-details.component.html',
})
export class CollegueDetailsComponent implements OnInit {
  
  collegue?: Collegue;

  constructor(private activatedRoute: ActivatedRoute, private dataService: DataService) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      if (params.get("pseudo")){
        this.dataService.getPseudo(params.get("pseudo")!).subscribe(
          collegue => {
            if (collegue) {
              this.collegue = collegue;
            }
          }
        );
      }
    });
  }
}
