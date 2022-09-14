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

  getReturnedBookedDates(): Observable<any> {
    const getData = this.http.get(this.localUrl + '/booked-dates');
    return from(getData).pipe(
      map((data: any) => {
        data.map((x: any) => x.bookDates.map((x: any) => new Date(x)));
        console.log(data);
      })
    );
  }

  saveBookedDate(bookDate: any[], name: any): Observable<any> {
    return this.http.post<any>(this.localUrl + '/book-date', {
      bookDate,
      name,
    });
  }
}
