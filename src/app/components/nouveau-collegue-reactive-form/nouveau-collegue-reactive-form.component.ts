import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { DataService } from 'src/app/services/api.service';

@Component({
  selector: 'app-nouveau-collegue-reactive-form',
  templateUrl: './nouveau-collegue-reactive-form.component.html',
  styleUrls: ['./nouveau-collegue-reactive-form.component.css']
})
export class NouveauCollegueReactiveFormComponent implements OnInit {
  

  formulaireCollegue: FormGroup = this.fb.group({
    'pseudo': ['', [
      Validators.required, 
      (control: AbstractControl) => this.dataService.getPseudo(control.value)
      .pipe(
        map(() => {return {pseudoExist : true}}),
        catchError(() => of(null))
      )
    ]
  ],
    'nom': ['', [Validators.required, Validators.min(2)]],
    'prenom': ['', [Validators.required, Validators.min(2)]],
    'photo': ['', Validators.required]
  },{
    validators: (control) => control.value.nom != control.value.prenom ? null : { nomPrenomIdentique : true }
  })

  constructor(private dataService: DataService, private fb: FormBuilder) { }

  ngOnInit(): void {
    
  }

  create() {
    this.dataService.createCollegue(this.formulaireCollegue.value);
  }

  get isPseudoInvalid() {
    return this.formulaireCollegue.get("pseudo")?.invalid && this.formulaireCollegue.get("pseudo")?.dirty
  }
}
