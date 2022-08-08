import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {ContentfulService} from "./shared/contentful.service";
import {Slider} from "./shared/interfaces/slider";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  sliders$: Observable<Slider[]>;

  constructor(private contentful: ContentfulService) {
  }

  ngOnInit() {
    this.contentful.logContent('4qrhYDhfCjwxzTGOh3LE4W')

    this.sliders$ = this.contentful.getContent('4qrhYDhfCjwxzTGOh3LE4W')
  }
}
