import {Injectable} from '@angular/core';
import {ProjectModel} from "../models/project.model";
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  public projects: BehaviorSubject<ProjectModel[] | undefined> = new BehaviorSubject<ProjectModel[] | undefined>(undefined);

  constructor(private httpClient: HttpClient) {
    this.httpClient.get<ProjectModel[]>('assets/projects.json').subscribe(p => {
      this.projects.next(p);
    })
  }
}
