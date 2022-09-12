import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() bookingDates: string[];

  calendarForm = new FormGroup({
    // TODO: add in the future sprint
    // email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl('', [Validators.required]),
  });

  constructor() {}

  getCorrectLabelForDates() {
    if (this.bookingDates.length <= 1)
      return 'Date to be booked: ' + this.bookingDates;

    return 'Dates to be booked: ' + this.bookingDates;
  }

  ngOnInit(): void {}
}
