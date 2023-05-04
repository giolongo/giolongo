import {Component} from '@angular/core';
import {MenuService} from "./services/menu.service";
import {KnowService} from "./services/know.service";
import {LangUtilsService} from "./services/lang-utils.service";
import {TimelineService} from "./services/timeline.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'giolongo';

  public lang = this.langUtilsService.langSelected;

  constructor(public menuService: MenuService, public knowService: KnowService, public timelineService: TimelineService, private langUtilsService: LangUtilsService) {
  }

  setSelectedMenu(link: string): void {
    this.menuService.selectedMenu.next(link);
  }

  changeRef(link: string): void {
    this.setSelectedMenu(link);
    const element = document.querySelector(link)
    if (element) element.scrollIntoView({behavior: 'smooth', block: 'start'})
  }

  changeLang(lang: 'it' | 'en'): void {
    this.langUtilsService.changeLang(lang);
  }
}
