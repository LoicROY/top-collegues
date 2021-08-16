import { Router } from '@angular/router';
import { Collegue } from './../../models/collegue';
import { Component, OnInit } from '@angular/core';
import { DataService } from './../../services/api.service';

@Component({
  selector: 'app-nouveau-collegue-template-form',
  templateUrl: './nouveau-collegue-template-form.component.html',
  styleUrls: ['./nouveau-collegue-template-form.component.css'],
})
export class NouveauCollegueTemplateFormComponent implements OnInit {

  collegue: Collegue = {
    pseudo: '',
    score: 0,
    photo: '',
    nom: '',
    prenom: '',
  };

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {}

  create() {
    this.dataService.createCollegue(this.collegue);
    this.router.navigateByUrl('');
  }
}
