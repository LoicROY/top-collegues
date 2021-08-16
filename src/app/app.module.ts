import { ROUTES } from './router.config';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AvisComponent } from './components/avis/avis.component';
import { CollegueComponent } from './components/collegue/collegue.component';
import { ListColleguesComponent } from './components/list-collegues/list-collegues.component';
import { HistoriqueVotesComponent } from './components/historique-votes/historique-votes.component';
import { VoteComponent } from './components/vote/vote.component';
import { NouveauCollegueTemplateFormComponent } from './components/nouveau-collegue-template-form/nouveau-collegue-template-form.component';
import { NouveauCollegueReactiveFormComponent } from './components/nouveau-collegue-reactive-form/nouveau-collegue-reactive-form.component';

import { ScorePipe } from './pipes/score.pipe';
import { NomPrenomValidatorDirective } from './validators/nom-prenom-validator.directive';
import { PseudoValidatorDirective } from './validators/pseudo-validator.directive';
import { HomeComponent } from './components/home/home.component';
import { FormulaireComponent } from './components/formulaire/formulaire.component';
import { CollegueDetailsComponent } from './components/collegue-details/collegue-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AvisComponent,
    CollegueComponent,
    ListColleguesComponent,
    ScorePipe,
    HistoriqueVotesComponent,
    VoteComponent,
    NouveauCollegueTemplateFormComponent,
    NomPrenomValidatorDirective,
    PseudoValidatorDirective,
    NouveauCollegueReactiveFormComponent,
    HomeComponent,
    FormulaireComponent,
    CollegueDetailsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
