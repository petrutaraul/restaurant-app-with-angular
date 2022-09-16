import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DbCommunicationService {
  localUrl = 'http://localhost:8080';
  constructor(private http: HttpClient) {}

  getBookedDate(): Observable<any> {
    return this.http.get(this.localUrl + '/booked-dates');
  }

  saveBookedDate(bookDate: any[], name: any): Observable<any> {
    return this.http.post<any>(this.localUrl + '/book-date', {
      bookDate,
      name,
    });
  }
}
