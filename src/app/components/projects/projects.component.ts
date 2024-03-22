import {Component, Input, OnInit} from '@angular/core';
import {ProjectModel} from "../../models/project.model";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  @Input() projects: ProjectModel[] | undefined | null;

  constructor() { }

  ngOnInit(): void {
  }

}
