import { Component, ComponentRef, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DbCommunicationService } from 'src/app/shared/services/db-communication.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  @Input() bookingDates: string[];
  @Input() datesToSave: string[];

  subscription: Subscription;
  @Output() bookedEvent = new EventEmitter<boolean>();

  constructor(private dataService: DbCommunicationService) {}

  calendarForm = new FormGroup({
    // TODO: add in the future sprint
    // email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl('', [Validators.required]),
  });

  submit() {
    const datesTobeBooked = this.datesToSave.map((date: any) => {
      return new Date(date).toISOString();
    });

    this.subscription = this.dataService
      .saveBookedDate(datesTobeBooked, this.calendarForm.value.name)
      .subscribe(
        (success) => {
          this.bookedEvent.emit(true);
        },
        (error) => this.bookedEvent.emit(false)
      );
  }

  getCorrectLabelForDates() {
    if (this.bookingDates.length <= 1)
      return 'Date to be booked: ' + this.bookingDates;

    return 'Dates to be booked: ' + this.bookingDates;
  }
}
