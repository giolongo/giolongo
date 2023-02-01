import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {TimelineModel} from "../models/timeline.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TimelineService {

  public timeline: BehaviorSubject<TimelineModel | null> = new BehaviorSubject<TimelineModel | null>(null);

  constructor(private httpClient: HttpClient) {
    this.httpClient.get<TimelineModel>('../../assets/timeline.json').subscribe(m => {
      this.timeline.next(m);
    })
  }
}

