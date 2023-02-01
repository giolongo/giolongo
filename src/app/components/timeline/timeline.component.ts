import {Component, Input, OnInit} from '@angular/core';
import { faGamepad, faVolleyballBall, faPlane } from '@fortawesome/free-solid-svg-icons';
import {TimelineModel} from "../../models/timeline.model";

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  @Input() timeline!: TimelineModel | null;
  planeIcon: any;
  gameIcon: any;
  volleyBallIcon: any;

  constructor() {
  }

  ngOnInit(): void {
    this.planeIcon = faPlane;
    this.gameIcon = faGamepad;
    this.volleyBallIcon = faVolleyballBall;
  }

  detailOnClick(experience: any) {
    experience.detailIsDisplayed = !experience.detailIsDisplayed;
  }

}
