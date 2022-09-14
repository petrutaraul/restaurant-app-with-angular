import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-now-scroll-btn',
  templateUrl: './book-now-scroll-btn.component.html',
  styleUrls: ['./book-now-scroll-btn.component.scss'],
})
export class BookNowScrollBtnComponent implements OnInit {
  constructor() {}

  scroll() {
    window.scrollTo(0, document.body.scrollHeight);
  }

  ngOnInit(): void {}
}
