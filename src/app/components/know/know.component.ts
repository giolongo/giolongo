import {Component, Input, OnInit} from '@angular/core';
import {KnowModel} from "../../models/know.model";

@Component({
  selector: 'app-know',
  templateUrl: './know.component.html',
  styleUrls: ['./know.component.css']
})
export class KnowComponent implements OnInit {

  @Input() knows!: KnowModel[] | null;
  constructor() { }

  ngOnInit(): void {
  }

}
