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
import { EventComponent } from './components/events/event/event.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    HeaderComponent,
    EventsComponent,
    SlidersComponent,
    HomeComponent,
    EventPageComponent,
    EventComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
