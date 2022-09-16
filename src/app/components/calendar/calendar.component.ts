import {
  Component,
  Output,
  ViewEncapsulation,
  AfterViewInit,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import {
  MatCalendar,
  MatCalendarCellClassFunction,
} from '@angular/material/datepicker';
import { Router } from '@angular/router';
import { DbCommunicationService } from 'src/app/shared/services/db-communication.service';
import { InfoSliderComponent } from '../info-slider/info-slider.component';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CalendarComponent implements AfterViewInit, OnInit {
  @ViewChild(MatCalendar) calendar: MatCalendar<Date>;
  @Output() formatedDates: string[] = [];
  @Output() unFormatedDatesToSave: string[] = [];
  responseBookedDates: Date[] = [];
  loading: boolean = true;
  todayDate: Date = new Date();

  constructor(
    private dataService: DbCommunicationService,
    private router: Router,
    private viewContainerRef: ViewContainerRef
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
  }

  bookedDatesFilter = (date: Date) => {
    const time = date.getTime();

    return !this.responseBookedDates.find((x) => x.getTime() == time);
  };

  formatDateToLocale = (event: any) => {
    return (
      ('00' + event.getDate()).slice(-2) +
      '-' +
      ('00' + (event.getMonth() + 1)).slice(-2) +
      '-' +
      event.getFullYear()
    );
  };

  dateClass: MatCalendarCellClassFunction<Date> = (event) => {
    const date = this.formatDateToLocale(event);

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
    const formatedDateToBeShown = this.formatDateToLocale(event);

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

  showInfoModal = (isError: boolean) => {
    const infoComponentRef =
      this.viewContainerRef.createComponent(InfoSliderComponent);
    infoComponentRef.instance.isSuccess = isError;
    infoComponentRef.instance.savedDates = this.formatedDates;
  };

  reload = (isBookedSucces: boolean) => {
    this.showInfoModal(isBookedSucces);
    this.resetComponent();
  };

  resetComponent = () => {
    this.formatedDates = [];
    this.unFormatedDatesToSave = [];
    this.calendar.updateTodaysDate();
    this.loading = true;
    this.getBookedDates();
    this.ngOnInit();
  };

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.getBookedDates();
  }
}
