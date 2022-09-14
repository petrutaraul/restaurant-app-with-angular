import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormSubmitService {
  constructor() {}

  public isFormSubmitted: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
}
