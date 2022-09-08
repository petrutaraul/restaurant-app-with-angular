import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  @Input('sliderIndex') sliderIndex: number;
  @Input() sliderTitle: string;
  @Input() isImageSetAsBackground: boolean;
  @Input() fileUrl: string;
  @Input() fileTitle: string;
  @Input() eventPageButton: boolean | string;
  @Input() hasCalendar: boolean;

  constructor() {}

  ngOnInit(): void {}
}
