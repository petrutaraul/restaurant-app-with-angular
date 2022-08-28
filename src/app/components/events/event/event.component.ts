import { Component, Input, OnInit } from '@angular/core';
import { IEvent } from 'src/app/shared/interfaces/event';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class EventComponent implements OnInit {
  @Input('eventData') event: IEvent;

  constructor() {}

  ngOnInit(): void {}
}
