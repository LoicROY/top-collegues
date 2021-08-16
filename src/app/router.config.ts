import { Routes } from "@angular/router";
import { CollegueDetailsComponent } from "./components/collegue-details/collegue-details.component";
import { FormulaireComponent } from "./components/formulaire/formulaire.component";
import { HomeComponent } from "./components/home/home.component";
import { NouveauCollegueReactiveFormComponent } from './components/nouveau-collegue-reactive-form/nouveau-collegue-reactive-form.component';
import { NouveauCollegueTemplateFormComponent } from "./components/nouveau-collegue-template-form/nouveau-collegue-template-form.component";

export const ROUTES: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'collegues' },
    { path: 'collegues', component: HomeComponent },
    { path: 'collegues/:pseudo', component: CollegueDetailsComponent },
    { path: 'new', component: FormulaireComponent , children : [
        { path: '', pathMatch: 'full', redirectTo: 'template-form' },
        { path: 'template-form', component: NouveauCollegueTemplateFormComponent },
        { path: 'reactive-form', component: NouveauCollegueReactiveFormComponent }
    ] },
]