import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AvisComponent } from './components/avis/avis.component';
import { CollegueComponent } from './components/collegue/collegue.component';
import { ListColleguesComponent } from './components/list-collegues/list-collegues.component';
import { ScorePipe } from './pipes/score.pipe';
import { HistoriqueVotesComponent } from './components/historique-votes/historique-votes.component';
import { VoteComponent } from './components/vote/vote.component';

@NgModule({
  declarations: [
    AppComponent,
    AvisComponent,
    CollegueComponent,
    ListColleguesComponent,
    ScorePipe,
    HistoriqueVotesComponent,
    VoteComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
