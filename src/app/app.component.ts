import { Component } from '@angular/core';
import {MenuService} from "./services/menu.service";
import {KnowService} from "./services/know.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'giovanniemanuelelongo';

  constructor(public menuService: MenuService, public knowService: KnowService) {
  }
}
