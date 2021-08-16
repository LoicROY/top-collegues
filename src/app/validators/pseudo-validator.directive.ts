import { Directive } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  NG_ASYNC_VALIDATORS,
  ValidationErrors,
} from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError, delay, map } from 'rxjs/operators';
import { DataService } from '../services/api.service';

@Directive({
  selector: '[appPseudoValidator]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: PseudoValidatorDirective,
      multi: true,
    },
  ],
})
export class PseudoValidatorDirective implements AsyncValidator {
  constructor(private dataService: DataService) {}

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return this.dataService.getPseudo(control.value)
    .pipe(
      map(() => {return {pseudoExist : true}}),
      catchError(() => of(null))
    )
  }
}
