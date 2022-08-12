import { Component, Input, OnInit } from '@angular/core';
import { Slider } from '../../shared/interfaces/slider';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  @Input('sliderData') slide: Slider;
  @Input('sliderIndex') sliderIndex: number;

  constructor() {}

  ngOnInit(): void {}
}
