import {Component, Input, OnInit} from '@angular/core';
import {KnowModel} from "../../models/know.model";
import {Dictionary} from "../../models/dictionary.model";

@Component({
  selector: 'app-know',
  templateUrl: './know.component.html',
  styleUrls: ['./know.component.css']
})
export class KnowComponent implements OnInit {

  @Input() knows!: Dictionary<KnowModel[]> | null;
  @Input() groups!: KnowModel['group'][]  | null;
  constructor() { }

  ngOnInit(): void {
  }

}
