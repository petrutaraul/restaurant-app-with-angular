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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
