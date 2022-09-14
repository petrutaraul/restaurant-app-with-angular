import {
  Component,
  Output,
  ViewEncapsulation,
  AfterViewInit,
  OnInit,
} from '@angular/core';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { Router } from '@angular/router';
import { DbCommunicationService } from 'src/app/shared/services/db-communication.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CalendarComponent implements AfterViewInit, OnInit {
  selected: Date | null;
  @Output() formatedDates: string[] = [];
  @Output() unFormatedDatesToSave: string[] = [];
  responseBookedDates: Date[] = [];
  loading: boolean = true;

  constructor(
    private dataService: DbCommunicationService,
    private router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
  }

  bookedDatesFilter = (date: Date) => {
    const time = date.getTime();

    return !this.responseBookedDates.find((x) => x.getTime() == time);
  };

  dateClass: MatCalendarCellClassFunction<Date> = (event) => {
    const date =
      ('00' + event.getDate()).slice(-2) +
      '-' +
      ('00' + (event.getMonth() + 1)).slice(-2) +
      '-' +
      event.getFullYear();

    return this.formatedDates.find((x) => x == date) ? 'selected' : '';
  };

  pushDatesToCorrectArray = (
    correctDate: string,
    correctArrayToBeSave: string[]
  ) => {
    const index = correctArrayToBeSave.findIndex((x) => x == correctDate);
    if (index < 0) correctArrayToBeSave.push(correctDate);
    else correctArrayToBeSave.splice(index, 1);
  };

  select(event: any, calendar: any) {
    const formatedDateToBeShown =
      ('00' + event.getDate()).slice(-2) +
      '-' +
      ('00' + (event.getMonth() + 1)).slice(-2) +
      '-' +
      event.getFullYear();

    const formatedDatesForResponse =
      event.getFullYear() +
      '-' +
      ('00' + (event.getMonth() + 1)).slice(-2) +
      '-' +
      ('00' + event.getDate()).slice(-2);

    this.pushDatesToCorrectArray(formatedDateToBeShown, this.formatedDates);
    this.pushDatesToCorrectArray(
      formatedDatesForResponse,
      this.unFormatedDatesToSave
    );

    calendar.updateTodaysDate();
  }

  getBookedDates = () => {
    var datesToBeBooked: Date[] = [];
    this.dataService.getBookedDate().subscribe((data: any) => {
      data.map((x: any) =>
        x.bookDates.map((x: any) => datesToBeBooked.push(new Date(x)))
      );
      this.responseBookedDates = datesToBeBooked;
      this.loading = false;
    });
  };

  scrollToButtom() {
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 1000);
  }

  reload = () => {
    this.router.navigateByUrl('/home');
    if (!this.loading) {
      this.scrollToButtom();
    }
  };

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.getBookedDates();
  }
}
