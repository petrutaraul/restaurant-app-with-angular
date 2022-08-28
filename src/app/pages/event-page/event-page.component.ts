import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IEventFields } from 'src/app/shared/interfaces/event';
import { ContentfulService } from 'src/app/shared/services/contentful.service';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.scss'],
})
export class EventPageComponent implements OnInit {
  event$: Observable<IEventFields>;
  id: any;

  constructor(
    private contentful: ContentfulService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params['get']('id');

      this.event$ = this.contentful.getSingleEventPageData(this.id);
    });
  }
}
