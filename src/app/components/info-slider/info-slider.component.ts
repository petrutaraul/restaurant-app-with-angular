import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-slider',
  templateUrl: './info-slider.component.html',
  styleUrls: ['./info-slider.component.scss'],
})
export class InfoSliderComponent implements OnInit {
  @Input('userSavedDates') savedDates: string[];
  @Input() isSuccess: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}
