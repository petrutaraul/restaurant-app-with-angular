import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  selected: Date | null;

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

  constructor() {}

  ngOnInit(): void {}
}
