import { Injectable } from '@angular/core';
import * as contentful from 'contentful';
import { environment } from '../../../environments/environment';
import { from, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContentfulService {
  private client = contentful.createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.token,
  });

  constructor() {}

  // console logs a response for debugging
  logContent(contentId: string) {
    this.client
      .getEntry(contentId)
      .then((entry: any) => console.log(entry.fields));
  }

  // retrieves main page sliders data
  getSlidersData(contentId: string) {
    const promise = this.client.getEntry(contentId);
    return from(promise).pipe(map((entry: any) => entry.fields.moreSLdiers));
  }

  // retrive events in events page
  getEventsData(contentId: string) {
    const promise = this.client.getEntry(contentId);
    return from(promise).pipe(map((entry: any) => entry.fields.event));
  }

  // retrive specific event page data
  getSingleEventPageData(contentId: string) {
    const promise = this.client.getEntry(contentId);
    return from(promise).pipe(map((entry: any) => entry.fields));
  }
}
