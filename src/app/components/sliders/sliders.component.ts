import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentfulService } from 'src/app/shared/services/contentful.service';
import { Slider } from 'src/app/shared/interfaces/slider';

@Component({
  selector: 'app-sliders',
  templateUrl: './sliders.component.html',
  styleUrls: ['./sliders.component.scss'],
})
export class SlidersComponent implements OnInit {
  sliders$: Observable<Slider[]>;

  constructor(private contentful: ContentfulService) {}

  ngOnInit(): void {
    this.contentful.logContent('4qrhYDhfCjwxzTGOh3LE4W');

    this.sliders$ = this.contentful.getSlidersData('4qrhYDhfCjwxzTGOh3LE4W');
  }
}
