import { Component, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CalendarComponent implements OnInit {
  selected: Date | null;
  @Output() daysSelected: string[] = [];

  response = {
    disabledDates: ['09/09/2022', '09/05/2022', '09/18/2022'],
  };

  bookedDates = this.response.disabledDates.map((date: string) => {
    return new Date(date);
  });

  bookedDatesFilter = (date: Date) => {
    const time = date.getTime();

    return !this.bookedDates.find((x) => x.getTime() == time);
  };

  dateClass: MatCalendarCellClassFunction<Date> = (event) => {
    const date =
      ('00' + event.getDate()).slice(-2) +
      '-' +
      ('00' + (event.getMonth() + 1)).slice(-2) +
      '-' +
      event.getFullYear();

    return this.daysSelected.find((x) => x == date) ? 'selected' : '';
  };

  select(event: any, calendar: any) {
    const date =
      ('00' + event.getDate()).slice(-2) +
      '-' +
      ('00' + (event.getMonth() + 1)).slice(-2) +
      '-' +
      event.getFullYear();
    const index = this.daysSelected.findIndex((x) => x == date);
    if (index < 0) this.daysSelected.push(date);
    else this.daysSelected.splice(index, 1);

    calendar.updateTodaysDate();

    console.log('this.daysSelected', this.daysSelected);
  }

  constructor() {}

  ngOnInit(): void {}
}
