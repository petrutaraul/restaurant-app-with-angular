import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SliderComponent } from './components/sliders/slider/slider.component';
import { HeaderComponent } from './components/header/header.component';
import { EventsComponent } from './components/events/events.component';
import { AppRoutingModule } from './app-routing.module';
import { SlidersComponent } from './components/sliders/sliders.component';
import { HomeComponent } from './pages/home/home.component';
import { EventPageComponent } from './pages/event-page/event-page.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { toLocaleDateString } from './shared/pipes/toLocaleDateString/to-locale-date-string';
import { BookNowScrollBtnComponent } from './components/book-now-scroll-btn/book-now-scroll-btn.component';
import { BookingSliderComponent } from './components/sliders/booking-slider/booking-slider.component';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { InfoSliderComponent } from './components/info-slider/info-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    HeaderComponent,
    EventsComponent,
    SlidersComponent,
    HomeComponent,
    EventPageComponent,
    CalendarComponent,
    FormComponent,
    toLocaleDateString,
    BookNowScrollBtnComponent,
    BookingSliderComponent,
    SpinnerComponent,
    InfoSliderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
