import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IEvent } from 'src/app/shared/interfaces/event';
import { ContentfulService } from 'src/app/shared/services/contentful.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {
  constructor(private contentful: ContentfulService) {}
  events$: Observable<IEvent[]>;

  ngOnInit(): void {
    this.contentful.logContent('AvTRsX3C8La2Q4tliOpRl');

    this.events$ = this.contentful.getEventsData('AvTRsX3C8La2Q4tliOpRl');
  }
}
